//Import React
import React from "react";
//Import ReactDOM
import ReactDOM from "react-dom";
//Import the "App" component
import App from "./App";

//Import reducers
import reducers from "./reducers";

//Import Redux features
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

//Link React to the HTML
ReactDOM.render(<App/>, document.getElementById("root"));