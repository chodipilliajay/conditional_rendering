import React from "react";
import Login from "./Login";

var isLoggedIn = true;

const currentTime =new Date().getHours();

function App() {
  return <div className="container">
      {
      // isLoggedIn?<h1>Hello</h1>:<Login/>
      // currentTime > 12 && currentTime < 17?<h1>Why are you still working?</h1>:null
      currentTime > 12 && <h1>Why are you still working?</h1>
      }
      </div>
}

export default App;
