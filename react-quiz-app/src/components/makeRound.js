import React, { component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Redirect} from 'react-router';
import { NameForm } from './helperUIcomponents.js';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import MaterialTable from 'material-table';

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
        //{ title: 'Quesition Number', field: 'tableData.id', type:'numeric', editable:false },
        { title: 'Question', field: 'question' },
        { title: 'Answer', field: 'answer' },
      ],
      data: [
        {  qn: "1", question:'Input Question' , answer:'Input Answer' },
      ],
    });

    const [homeRedirect, setHomeRedirect] = useState(false);
    const [quizOverviewRedirect, setQuizOverviewRedirect] = useState(false);


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
    const printQuiz = () => {
        console.log(props.quiz)
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
            </div>
        </div>
    );
}

