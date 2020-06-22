import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navbar from './comonents/layout/navbar'
import Hotels from './comonents/dashboard/hotels';
import Restaurant from './pages/restaurant';
import Form from './pages/form';


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div>
        <Link to="/restaurant">Rest</Link><br></br>
        <Link to="/">Home</Link>

      </div>

      <Switch>
        <Route exact path="/" component={Hotels} />
        <Route exact path="/form" component={Form} />
        <Route path="/restaurant/:id" component={Restaurant} />

      </Switch>

    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
