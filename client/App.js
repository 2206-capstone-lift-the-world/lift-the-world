import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';

const App = () => {
  return (
    <div className="appjs-div">
      <Navbar />
      <Routes />
      <Navbar />
    </div>
  );
};

export default App;
