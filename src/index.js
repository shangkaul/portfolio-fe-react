import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import Projects from './Projects';
import Work from './Work';
import Blogs from './Blogs';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Nav />
<Switch>
  <Route exact path="/" component={App}/>
  <Route exact path="/projects" component={Projects}/>
  <Route exact path="/work" component={Work}/>
  <Route exact path="/blogs" component={Blogs}/>

</Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
