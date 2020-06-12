import React from 'react';
import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import HomePage from './components/homepage';
import QuizPage from './components/quiz';
import MakeRound from './components/makeRound';
import QuizOverview from './components/quizOverview';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


function App() {
  return (
    <Router>
        <Route exact path='/' component={withRouter(HomePage)} />
        <Route path='/quiz' component={withRouter(QuizPage)} />
        <Route path='/quizOverview' component={withRouter(QuizOverview)} />
        <Route path='/makeRound' component={withRouter(MakeRound)} />
    </Router>
  );
}

export default App;
