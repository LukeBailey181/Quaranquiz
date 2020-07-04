import React, { component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter, useRouteMatch } from 'react-router-dom';
import { Redirect} from 'react-router';
import { NameForm } from './helperUIcomponents';
import Button from 'react-bootstrap/Button';
import MakeRound from './makeRound'
import createPalette from '@material-ui/core/styles/createPalette';

export default function QuizOverview(props) {
    
    /*----------Quiz State-----------*/
    const [quiz, setQuiz] = useState([])

    /*----------Navigation Helpers Start----------*/
    const [homeRedirect, setHomeRedirect] = useState(false);
    const [makeRoundRedirect, setMakeRoundRedirect] = useState(false);
    let { path, url } = useRouteMatch();

    const toHome = () => {
        setHomeRedirect(true);
    }
    const toMakeRound = () => {
        setMakeRoundRedirect(true);
    }

    if (homeRedirect) {
        return <Redirect psuh to="/" />;
    }
    if (makeRoundRedirect) {
        return <Redirect to={{
            pathname: '/makeRound',
            state: { quiz: quiz }
        }} />;
    }
    /*----------Navigation Helpers End----------*/

    return(
        <div className="full-screen-container">  
            <div className ="upper-left-container">
                <div className="central">
                    <Button variant="primary" onClick={toHome}>Home</Button> 
                </div>
            </div>
            <div className="central">
                <h2>Here you can see an overview of your quiz and edit section</h2>
                <h3>Click 'add round' to add a round</h3>  
                <div className="padded-container" style={{flexDirection:"column"}}>   
                    <Button variant="success" onClick={toMakeRound}>Add Round</Button>
                </div>  
                <Button variant="success" onClick={() => console.log(quiz)}>Print Quiz</Button>
            </div>
        </div>
    )
}