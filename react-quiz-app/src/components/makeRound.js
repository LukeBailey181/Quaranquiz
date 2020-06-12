import React, { component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Redirect} from 'react-router';
import { NameForm } from './helperUIcomponents.js';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


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

export default function MakeRound(props) {

    const [numRows, setNumRows] = useState(1);
    const [roundData, setRoundData] = useState([]);
    const [firstRender, setFirstRender] = useState(true);
 
    const [homeRedirect, setHomeRedirect] = useState(false);
    const [quizOverviewRedirect, setQuizOverviewRedirect] = useState(false);

    useEffect( () => {
        if(props.edit) {
            //api call
        } else {
            setRoundData([{id: numRows, Question: 'Click to edit', Answer: 'Click to edit'}]);
        }
    },[])

    /*----------Navigation Helpers Start----------*/
    const toHome = () => {
        setHomeRedirect(true);
    }
    const toQuizOverview = () => {
        setQuizOverviewRedirect(true);
    }



    if (homeRedirect) {
        return <Redirect push to="/" />;
    }
    if (quizOverviewRedirect) {
        return <Redirect push to="/quizOverview" />;
    }
    /*----------Navigation Helpers End----------*/

    const columns = [{
        dataField: 'id',
        text: 'Question Number'
      }, {
        dataField: 'Question',
        text: 'Question'
      }, {
        dataField: 'Answer',
        text: 'Answer'
      }];


    const printProducts = () => {
        console.log(roundData);
    }

    const newTableEntry = () => {
        setRoundData([...roundData, {id: numRows + 1, Question: 'Click to edit', Answer: 'Click to edit'}]);
        setNumRows(numRows + 1);        
    }

    const submitRound = () => {
        alert("Round Submitted! (not yet but soomn");
    }

    return(
        <div className="full-screen-container">  
            <div className ="upper-left-container">
                <div className="central">
                    <button onClick={toHome} type="button" class="btn btn-primary btn-lg">
                        Home
                    </button>
                    <div className="padded-container">
                        <Button variant="primary" size='lg' onClick={toQuizOverview}>Overview</Button>
                    </div>
                </div>
            </div>
            <div className="central">
            <BootstrapTable
                keyField="id"
                data={ roundData }
                columns={ columns }
                cellEdit={ cellEditFactory({ mode: 'click' }) }
            />
            <Button variant="primary" size='lg' onClick={printProducts}>Print Products</Button>
            <Button variant="success" size='lg' onClick={newTableEntry}>Add Question</Button>
            <Button variant="success" size='lg' onClick={submitRound}>Submit Round</Button>
            </div>
        </div>
    );
}