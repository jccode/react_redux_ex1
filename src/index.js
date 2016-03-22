import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// hot reload.
if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
