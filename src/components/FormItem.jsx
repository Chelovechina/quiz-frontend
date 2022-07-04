import React from 'react';
import { Field } from 'formik';
import { Form } from 'react-bootstrap';

const FormItem = ({ question }) => {
  const answerList = question.answers.map((answer) => {
    return (
      <Field
        key={answer.id}
        label={answer.text}
        name={question.id}
        type="checkbox"
        value={answer.text}
        as={Form.Check}
      />
    );
  });

  return (
    <div className="mt-3">
      <h5>{question.text}</h5>
      <Form.Group>{answerList}</Form.Group>
    </div>
  );
};

export default FormItem;
