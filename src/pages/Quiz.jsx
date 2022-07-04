import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSingleQuiz, getQuizesState } from '../redux/quizesSlice';
import MySpinner from '../components/MySpinner';
import { STATUS_LOADING } from '../utils/const';
import QuizForm from '../components/QuizForm';

const Quiz = () => {
  const dispatch = useDispatch();
  const { status, currentQuiz } = useSelector(getQuizesState);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleQuiz(id));
  }, [dispatch, id]);

  if (currentQuiz.questions === undefined || status === STATUS_LOADING) {
    return <MySpinner />;
  }

  return (
    <div>
      <h1 className="text-center">{currentQuiz.name}</h1>
      <QuizForm questions={currentQuiz.questions} id={currentQuiz.id} />
    </div>
  );
};

export default Quiz;
