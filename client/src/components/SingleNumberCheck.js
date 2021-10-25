import React, { useState } from "react";
import axios from "axios";
import { ShowPrime } from "./ShowPrime";

export const SingleNumberCheck = (props) => {
    const [number, setNumber] = useState('1');
    const [isNumberPrime, setIsNumberPrime] = useState(true);
  
    const [showIsPrime, setShowIsPrime] = useState(false);
  
    const [errorMsg, setErrorMsg] = useState('');
  
    const handleNumberChange = (event) => {
      const changedNumber = event.target.value;
      setErrorMsg('');
      setShowIsPrime(false);
      setNumber(changedNumber);
    };
  
    const numberSubmit = (event) => {
      event.preventDefault();
  
      setErrorMsg('');
  
      axios.get(props.baseUrl + "checkprime", {params: {number: number}}).then((response) => {
        setIsNumberPrime(response.data.isPrime);
      }).catch(error => {
        setErrorMsg(error.response.data.errors[0]['msg']);
        setShowIsPrime(false);
      });
  
      setShowIsPrime(true);
    }
  
    return(
      <div className="App">
        <form id="contact-form" onSubmit={numberSubmit}>
          <div className="form-group">
            <label htmlFor="number">A number:</label>
            <input type="text" name="number" value={number} onChange={handleNumberChange} className="form-control" />
            <button type="submit" className="btn btn-primary">Is the number prime?</button>
          </div>
        </form>
  
        {errorMsg ? <div>{errorMsg}</div> : ''}
        <div className="isPrime">
          {showIsPrime &&
            <ShowPrime number={number} isPrime={isNumberPrime} />       
          }
        </div>
      </div>
    );
}