import React, { component, useState, useEffect, form } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Redirect} from 'react-router';
import { NameForm } from './helperUIcomponents.js';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

//for material UI input box
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export function CustomTable(props) {

    const round = String(props.round)
      
    return (
        <div style={{padding:50, width:'100%'}}>
            
            <MaterialTable
                title={"Round: ".concat(round)}
                columns={props.state.columns}
                data={props.state.data}
                options = {{
                    search:false,
                    paging:false,
                    headerStyle: {backgroundColor: '#ddd', height: 10 },
                    filtering: false,
                    hideFilterIcons: true,
                    sorting: false
                }}
                editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(); 
                        props.setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                        });
                    }, 0);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                        if (oldData) {
                        props.setState((prevState) => {
                            const data = [...prevState.data];
                            data[data.indexOf(oldData)] = newData;
                            return { ...prevState, data };
                        });
                        }
                    }, 0);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                        props.setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                        });
                    }, 0);
                    }),
                }}
            />
        </div>
    );
  }


export default function MakeRound(props) {

    const [numRows, setNumRows] = useState(1);
    const [round, setRound] = useState(1) //placeholder, this should be handed down from the quiz overview page
    const [state, setState] = useState({ columns: [
        { title: 'Question', field: 'question' },
        { title: 'Answer', field: 'answer' },
      ],
      data: [
        {  qn: "1", question:'Input Question' , answer:'Input Answer' },
      ],
    });
    const [roundName, setRoundName] = useState("");
    const [homeRedirect, setHomeRedirect] = useState(false);
    const [quizOverviewRedirect, setQuizOverviewRedirect] = useState(false);

    const classes = useStyles(); //for material UI input

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

    const printProducts = () => {
        console.log(state.data);
    }
    const printRoundName = () => {
        console.log(roundName)
    }
    const printQuiz = () => {
        console.log(props.quiz)
    }
    const printData = () => {
        console.log(state.data)
    }
    const addRound = () => {
        let temp_round=[]
        for (let qaPair of state.data) {
            let qa = {question: qaPair.question, answer:qaPair.answer};
            temp_round.push(qa)
        }
        let data = Object.assign({}, props.quiz);
        data.quiz.push(temp_round)
        props.setQuiz(data)
        setQuizOverviewRedirect(true)
    }
    return(
        <div className="full-screen-container">  
            <div className ="upper-left-container">
                <div className="central" style={{height:400}}>
                    <Button variant="primary" size="lg" onClick={toHome}>
                        Home
                    </Button>
                    <div className="padded-container">
                        <Button variant="primary" size='lg' onClick={toQuizOverview}>Overview</Button>
                    </div>
                </div>
            </div>
            <div className="central" style={{width:'100%'}}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Round Title" 
                    variant="outlined"
                    onChange={(e) => {
                        const { value } = e.target;
                        setRoundName(value)
                    }}
                 />
            </form>
                <CustomTable 
                    state={state}
                    setState={setState}  
                    numRows={numRows}  
                    setNumRows={setNumRows}
                    round={round}
                    quiz={props.quiz}
                    setQuiz={props.setQuiz}
                />
                <Button variant="primary" size='lg' onClick={printProducts}>Print Products</Button>
                <Button variant="primary" size='lg' onClick={printQuiz}>Print Quiz</Button>
                <Button variant="primary" size='lg' onClick={printData}>Print Data</Button>
                <Button variant="success" size='lg' onClick={addRound}>Add Round</Button>
                <Button variant="success" size='lg' onClick={printRoundName}>Print Round Name</Button>
            </div>
        </div>
    );
}

