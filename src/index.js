import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
// 	<div>
// 		<h1>title</h1>
// 	</div>, document.getElementById('header')
// );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
