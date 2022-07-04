import React from 'react';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import FormItem from './FormItem';
import { useDispatch } from 'react-redux';
import { sendAnswers } from '../redux/quizesSlice';
import { useNavigate } from 'react-router-dom';

const QuizForm = ({ id, questions }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initial = {};
  questions.forEach((question) => {
    initial[question.id] = [];
  });

  const questionList = questions.map((question) => {
    return <FormItem key={question.id} question={question} />;
  });

  const onFormSubmit = async (data, { setSubmitting }) => {
    setSubmitting(true);
    const payload = { ...data };
    questions.forEach((question) => {
      payload[question.text] = data[question.id];
      delete payload[question.id];
    });
    dispatch(sendAnswers({ id, payload }));
    setSubmitting(false);
    return navigate('/results');
  };

  return (
    <Formik initialValues={initial} onSubmit={onFormSubmit}>
      {({ isSubmitting, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          {questionList}
          <div>
            <Button className="mt-2" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuizForm;
