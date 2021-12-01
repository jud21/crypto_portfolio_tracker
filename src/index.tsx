import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components';
import { PortPage } from './components';
import { SignUp } from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path='/' element = {<Home title={'Crypto Collector'} />}>
        </Route>

        <Route path='/SignUp' element = {<SignUp></SignUp>}>
        </Route>
        
        <Route path='/PortPage' element = {<PortPage></PortPage>}>
        </Route>

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
