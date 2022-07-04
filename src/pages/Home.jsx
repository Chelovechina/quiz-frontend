import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchQuizes, getQuizesState } from '../redux/quizesSlice';
import { STATUS_LOADING } from '../utils/const';
import MyModal from '../components/MyModal';
import MySpinner from '../components/MySpinner';

const Home = () => {
  const disptach = useDispatch();
  const { quizes, status } = useSelector(getQuizesState);

  useEffect(() => {
    disptach(fetchQuizes());
  }, [disptach]);

  const quizesList = quizes.map((quiz) => {
    return <MyModal key={quiz.id} quiz={quiz} />;
  });

  if (status === STATUS_LOADING) {
    return <MySpinner />;
  }

  return (
    <div>
      <h1 className="text-center">QuizWEB</h1>
      <hr />
      <h3 className="h3 mb-3">Выберите тест:</h3>
      <div className="d-flex gap-4">{quizesList}</div>
    </div>
  );
};

export default Home;
