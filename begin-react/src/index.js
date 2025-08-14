import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRefectory from "./AppRefectory";

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * 페이지에서 Id 가 root 인걸 찾아서 그 안에 React를 넣겠다. 아래 render
 * public > index.html 에서 root 확인 가능.
 */
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <AppRefectory/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
