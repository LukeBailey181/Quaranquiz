import React, { component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

export function NameForm(props) {

    const [value, setValue] = useState("");

    const fieldText = props.fieldText;
  
    const handleChange = (event) => {
      setValue(event.target.value);
    }
  
    const handleSubmit = (event) => {
      alert('A name was submitted: ' + value);
      event.preventDefault();
    }
      return (
        <form onSubmit={handleSubmit}>
          <label>
            {fieldText} 
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      ); 
  }
