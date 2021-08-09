import { useState, useEffect } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import Header from '../../Components/header/header';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>SM - Home</title>
      </Helmet>
      <Header />
    </div>
  );
}

export default App;
