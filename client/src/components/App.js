import React from "react";
import { ManyNumbersCheck } from "./ManyNumbersCheck";
import { SingleNumberCheck } from "./SingleNumberCheck";
import styles from "../css/primes.css"


const baseURL = "http://localhost:5000/myapi/";

const App = () => {
  
  return(
    <div className="container">
      <div>
        <SingleNumberCheck baseUrl={baseURL} />
        <ManyNumbersCheck baseUrl={baseURL} />
      </div>
    </div>
  );
}

export default App;
