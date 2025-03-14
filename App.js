  import React from 'react';
  import { Routes, Route } from 'react-router-dom';
  import Home from './pages/home';
  import About from './pages/about';
  import Login from './pages/Login';
  import Signup from './pages/Signup';
  import Admission from './pages/admission';
  import Parent from './pages/parent';
  import Teacher from './pages/teacher';
  import FullResult from './pages/Full_result';

  const App = () => {
    return (<>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup987234" element={<Signup />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/result" element={<FullResult />} />
      </Routes>


      </>
    );
  };

  export default App;
