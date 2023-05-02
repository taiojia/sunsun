import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; // DO NOT USE THIS css file, because it affects the font
import App from './App';
// @ts-ignore
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();