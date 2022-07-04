import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScore } from '../redux/quizesSlice';
import MySpinner from '../components/MySpinner';

const Result = () => {
  const score = useSelector(getScore);

  if (!score) {
    return <MySpinner />;
  }

  return (
    <div>
      <h1 className="text-center">Результат:</h1>
      <hr />
      <h3 className="h3 mb-3 text-center text-primary">{score}%</h3>
      <Link to="/">
        <Button variant="primary">Назад</Button>
      </Link>
    </div>
  );
};

export default Result;
