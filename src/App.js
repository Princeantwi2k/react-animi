
import React from 'react';
import Nav from './Component/Nav';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Reporter from './Component/Reporter';
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills';
import Login from './Component/Login';
const App = () => {
  return (
<BrowserRouter>
<Nav />
<Switch>
<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/skills" component={Skills} />
<Route path="/report" component={Reporter} />
<Route path="/login" component={Login} />
</Switch>
</BrowserRouter>
     
    
  );
}


export default App;
 