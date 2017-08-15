import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Switch, Route} from 'react-router-dom';

import Counter from './Counter'
import Header from './header'




const CounterPage = (title) =>(
  <Counter title={title}/>

);

class App extends Component {
  render() {

    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
        
          <Header title=""/>
        </div>
        <Switch>

          <Route path = '/' exact component= {() => CounterPage ('My counter Comp')} />
          <Route path='/counter1' component={Counter} />
          <Route path='/counter2' component={() => CounterPage()} />
        </Switch>
        <p className="App-intro">
          
        </p>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
