import React from "react";
import { ManyNumbersCheck } from "./ManyNumbersCheck";
import { SingleNumberCheck } from "./SingleNumberCheck";

const baseURL = "http://localhost:5000/myapi/";

const App = () => {
  
  return(
    <div className="App">
      <SingleNumberCheck baseUrl={baseURL} />
      <br/>
      <ManyNumbersCheck baseUrl={baseURL} />
    </div>
  );
}

export default App;
