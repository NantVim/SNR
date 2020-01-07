import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const rerenderEntireTree = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>, document.getElementById('root')
  );
};

rerenderEntireTree(store);

//Передача функции rerenderEntireTree в state через call-back
store.subscribe( () => {
  rerenderEntireTree(store);
}); // Паттерн - observer/наблюдатель

