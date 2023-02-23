import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ChatContextProvider from './components/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ChatContextProvider>
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	</ChatContextProvider>,
);
