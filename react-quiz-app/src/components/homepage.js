import React, { component } from 'react';
import { Link } from 'react-router-dom';
//import './../App.css';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Quiz ID: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default function HomePage(props) {

    return (
        <div className="full-screen-container">
            <div className="central-container">  
                <button type="button" class="btn btn-primary btn-lg">
                    Make Quiz
                </button>
                <div className="join-quiz">
                    <h1>Join a Quiz!</h1>
                </div>
                <div> 
                    <NameForm />
                </div>               
            </div>        
        </div>
    );
}