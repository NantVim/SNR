import React from 'react';
import { Route } from "react-router"
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar navData={props.state.navBar}/>
        <div className='app-wrapper-content'>
          <Route
            path='/profile'
            render={() =>
              <Profile
                profileData={props.state.profileData}
                pushPost={props.pushPost}
                updateNewPostText={props.updateNewPostText}
              />}
          />
          <Route
            path='/dialogs'
            render={() => <Dialogs dialogsData={props.state.dialogsData}/>}
          />

          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
  );
};

export default App;