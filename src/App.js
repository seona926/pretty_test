import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import MainPage from './pages/MainPage';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import ResultBeautiful from './pages/ResultBeautiful';
import ResultAverage from './pages/ResultAverage';
import ResultUgly from './pages/ResultUgly';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} exact={true} />
        <Route path="/q1" element={<Question1 />} />
        <Route path="/q2" element={<Question2 />} />
        <Route path="/q3" element={<Question3 />} />
        <Route path="/result/beautiful" element={<ResultBeautiful />} />
        <Route path="/result/average" element={<ResultAverage />} />
        <Route path="/result/ugly" element={<ResultUgly />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
