import React, { component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect} from 'react-router';
import { NameForm } from './helperUIcomponents.js';
import Button from 'react-bootstrap/Button';

export default function QuizOverview(props) {

    /*----------Navigation Helpers Start----------*/
    const [homeRedirect, setHomeRedirect] = useState(false);
    const [makeRoundRedirect, setMakeRoundRedirect] = useState(false);

    const toHome = () => {
        setHomeRedirect(true);
    }
    const toMakeRound = () => {
        setMakeRoundRedirect(true);
    }

    if (homeRedirect) {
        return <Redirect push to="/" />;
    }
    if (makeRoundRedirect) {
        return <Redirect push to="/makeRound" />;
    }
    /*----------Navigation Helpers End----------*/

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
                <h2>Here you can see an overview of your quiz and edit section</h2>
                <h3>Click 'add round' to add a round</h3>  
                <div className="padded-container">   
                    <Button variant="success" onClick={toMakeRound}>Add Round</Button>
                </div>  
            </div>
        </div>
    )
}