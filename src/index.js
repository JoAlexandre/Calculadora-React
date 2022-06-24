import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Car from './Car';
import reportWebVitals from './reportWebVitals';
import Calculadora from './Calculadora';
import RefTutorial from './Hooks/RefTutorial';
import UseLayoutEffectTutorial from './Hooks/UseLayoutEffectTutorial';
import ContextTutorial from './Hooks/ContextTutorial';
import CallbackTutorial from './Hooks/UseCallback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculadora/>
    {/* <RefTutorial/> */}
    {/* <UseLayoutEffectTutorial/> */}
    {/* <ContextTutorial /> */}
    {/* <CallbackTutorial /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
