import React from "react";
import Header from "./Header";
import Body from "./Body";

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
