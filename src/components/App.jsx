import React from "react";
import Header from "./Header";
import Body from "./Body";
import ProductList from "./ProductList";
import MarketList from "./MarketList";
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <style jsx global>{`
          body {
            font-family: sans-serif;
            width: 100%;
          }
        `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route path='/productlist' component={ProductList} />
        <Route path='/marketlist' component={MarketList} />
      </Switch>
    </div>
  );
}

export default App;
