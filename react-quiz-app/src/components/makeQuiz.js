import React, { component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect} from 'react-router';
import { NameForm } from './helperUIcomponents.js';

function QuestionInput(props) {

    const [questionNumber, setQuestionNumber] = useState(1);

    const incrementQ = () => {
        setQuestionNumber(questionNumber + 1);
    }

    return(
        <div>  
            <h2>Qestion {questionNumber}</h2>
            <div>
                <NameForm fieldText = ""/>
            </div>
            <h2>Answer {questionNumber}</h2>
            <div>
                <NameForm fieldText = ""/>
            </div>
            <button onClick={incrementQ} type="button" class="btn btn-primary btn-lg">
                Add Question
            </button>
        </div>
    )
}

export default function MakeQuiz(props) {

    const [homeRedirect, setHomeRedirect] = useState(false);

    const toHome = () => {
        setHomeRedirect(true);
    }

    if (homeRedirect) {
        return <Redirect push to="/" />;
    }

    return(
        <div className="full-screen-container">  
            <div className ="upper-left-container">
                <div className="central">
                    <button onClick={toHome} type="button" class="btn btn-primary btn-lg">
                        Home
                    </button>
                </div>
            </div>
            <div className="central">
                <QuestionInput />
            </div>
        </div>
    );
}