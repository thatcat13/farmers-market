import React from "react";
import Header from "./Header";

function App(){
  return (
    <div>
      <style jsx global>{`
          body {
            font-family: sans-serif;
          }
        `}</style>
      <Header/>
    </div>
  );
}

export default App;
