import React from "react";
import Header from "./Header";
import Body from "./Body";
// import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style jsx global>{`
          body {
            font-family: sans-serif;
          }
        `}</style>
      <Header/>

      <Body />
    </div>
  );
}

export default App;
