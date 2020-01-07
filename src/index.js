import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root')
  );
};

//Передача функции rerenderEntireTree в state через call-back
store.subscriber(rerenderEntireTree); // Паттерн - observer/наблюдатель

rerenderEntireTree(store.getState());