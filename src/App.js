import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header/Header';
import DashBoard from './Components/DashBoard/DashBoard';


function App() {
  return (
    <div>
      <Header></Header>
      <DashBoard></DashBoard>
    </div>
  )
}

export default App;
