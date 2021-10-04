import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Counter from './components/counter';
// import Counters2 from './components/counters2';
// import Count from './components/count';
// import Movies from './components/movies';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App />
    {/* <Count /> */}
    {/* <Movies /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
