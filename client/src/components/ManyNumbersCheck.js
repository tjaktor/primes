import React, { useState } from "react";
import axios from "axios";
import { ShowSumPrime } from "./ShowPrime";

export const ManyNumbersCheck = (props) => {
    const [numbers, setNumbers] = useState('1,3,4');
    const [numbersSum, setNumbersSum] = useState('8');
    const [isNumberPrime, setIsNumberPrime] = useState(true);
  
    const [showIsPrime, setShowIsPrime] = useState(false);
  
    const [errorMsg, setErrorMsg] = useState('');
  
    const handleNumberChange = (event) => {
      const changedNumber = event.target.value;
      setErrorMsg('');
      setShowIsPrime(false);
      setNumbers(changedNumber);
    };
  
    const numbersSubmit = (event) => {
      event.preventDefault();
  
      setErrorMsg('');
  
      axios.get(props.baseUrl + "sum", {params: {nums: numbers}}).then((response) => {
        setNumbersSum(response.data.result);
        setIsNumberPrime(response.data.isPrime);
        setShowIsPrime(true);
      }).catch(error => {
        setErrorMsg(error.response.data.errors[0]['msg']);
        setShowIsPrime(false);
      });
  
    }
  
    return(
      <div className="App">
        <form id="contact-form" onSubmit={numbersSubmit}>
          <div className="form-group">
            <label htmlFor="number">Many numbers (e.g. "1,3,4"):</label>
            <input type="text" name="number" value={numbers} onChange={handleNumberChange} className="form-control" />
            <button type="submit" className="btn btn-primary">Is the sum of the numbers prime?</button>
          </div>
        </form>
  
        {errorMsg ? <div>{errorMsg}</div> : ''}
        <div className="isPrime">
          {showIsPrime &&
            <ShowSumPrime numbers={numbers} numbersSum={numbersSum} isPrime={isNumberPrime} />       
          }
        </div>
      </div>
    );
}