import React, { component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { NameForm } from './helperUIcomponents';
//import './../App.css';
import Button from 'react-bootstrap/Button';


export default function HomePage(props) {

    const [redirect, setRedirect] = useState(false);

   /*----------Init Quiz Object----------*/

    const initQuiz = () => {
        let data = Object.assign( {}, props.quiz)
        data.quiz_id = Math.round(Math.random() * 10000)
        data.maker_id = Math.round(Math.random() * 10000)
        props.setQuiz(data)
        setRedirect(true)
    }


    if (redirect) {
        return <Redirect push to="/quizOverview" />;
    }
    
    const printQuiz = () => {
        console.log(props.quiz)
    }

    return (
        <div className="full-screen-container">
            <div className="central-container">  
                <Button variant="primary" size='lg' onClick={initQuiz}>Make Quiz</Button>
                <div className="join-quiz">
                    <h1>Join a Quiz!</h1>
                </div>
                <div> 
                    <NameForm fieldText="Quiz ID " />
                </div>               
                <Button variant="primary" size='lg' onClick={printQuiz}>Print Quiz</Button>
            </div>        
        </div>
    );
}