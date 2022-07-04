import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Quiz />}></Route>
          <Route path="/results" element={<Result />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
