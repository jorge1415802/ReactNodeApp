import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/index.jsx';
import './styles.scss';
import { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter,Redirect} from "react-router-dom";
import Nav from './components/Nav/nav.jsx';
import Login from './components/Login/login.jsx';

class Index extends Component {
    render(){
        return(
            <div>
                <Nav></Nav>
                <Redirect to='/register'></Redirect>
            </div>
        )
    }
}

/*const Index = () => {
  return <div>
      Welcome to React!
      </div>;
};*/
ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route path='/' component={Index}></Route>
            <Route path='/register' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
        </React.Fragment>
    </BrowserRouter>,document.getElementById('root'));