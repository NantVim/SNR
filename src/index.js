import './index.css';
import state, {pushPost, subscriber, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        pushPost={pushPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>, document.getElementById('root')
  );
};

//Передача функции rerenderEntireTree в state через call-back
subscriber(rerenderEntireTree);

rerenderEntireTree(state);