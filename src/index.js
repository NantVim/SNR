import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";

const rerenderEntireTree = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App  />
      </Provider>
    </BrowserRouter>, document.getElementById('root')
  );
};

rerenderEntireTree(store);

//Передача функции rerenderEntireTree в state через call-back
store.subscribe( () => {
  rerenderEntireTree(store);
}); // Паттерн - observer/наблюдатель

