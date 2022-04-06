import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Routes>
				<Route exact path="/" element={<App />} />
			</Routes>
			<Footer />
		</React.StrictMode>
	</Router>
);

root.render(routing);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//reportWebVitals();