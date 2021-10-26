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
      <div className="number-asking">
        <form id="contact-form" onSubmit={numberSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="number">A number:</label>
            <input type="text" name="number" value={number} onChange={handleNumberChange} className="form-control" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Is the number prime?</button>
            {errorMsg ? <div>{errorMsg}</div> : ''}
          </div>
        </form>
  
        <div className="is-prime">
            <div className={showIsPrime ? 'visible' : 'hidden'}>
              <ShowPrime number={number} isPrime={isNumberPrime} />
            </div>       
        </div>
      </div>
    );
}