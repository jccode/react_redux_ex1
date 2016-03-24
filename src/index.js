import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './components/App';

// hot reload.
if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
