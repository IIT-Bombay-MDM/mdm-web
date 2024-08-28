import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Team from './components/Team';
import Projects from './components/Projects';
import './App.css';


const App: React.FC = () => {
  return (
    <Router basename="/mdm-web">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
