import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import GlobalStyle from "./globalStyle";


ReactDOM.render(
        <Provider store={store}>
            <GlobalStyle/>
            <App />
        </Provider>,
    document.getElementById('root')
);


