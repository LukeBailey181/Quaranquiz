import React, { component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { NameForm } from './helperUIcomponents';
//import './../App.css';



export default function HomePage(props) {

    const [redirect, setRedirect] = useState(false);

    const toMakeQuiz = () => {
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect push to="/quizOverview" />;
    }

    return (
        <div className="full-screen-container">
            <div className="central-container">  
                <button onClick={toMakeQuiz} type="button" class="btn btn-primary btn-lg">
                    Make Quiz
                </button>
                <div className="join-quiz">
                    <h1>Join a Quiz!</h1>
                </div>
                <div> 
                    <NameForm fieldText="Quiz ID " />
                </div>               
            </div>        
        </div>
    );
}