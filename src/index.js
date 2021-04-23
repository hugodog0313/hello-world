import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './zen.css';
import reportWebVitals from './reportWebVitals';
import './component/context.js';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import colorApp from '../src/reducer/reducer';

let store = createStore(colorApp);

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
	, document.getElementById('body')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
