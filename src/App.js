
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from './services/auth.service';

import Login from './components/login.component';
import Register from './components/register.component';
import Home from './components/home.component';
import Profile from './components/profile.component';
import BoardUser from './components/board-user.component';
import BoardModerator from './components/board-moderator.component';
import BoardAdmin from './components/board-admin.component ';


class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state= {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    }
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      })
    }
  }

  logout() {
    AuthService.logout();
  }
  
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard} = this.state;

    return (
      <div>
        <nav className="navber navbar-expand navbar-dark bg-dark">

          <Link to={"/"} className="navbar-brand"> React</Link>

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={('/home')}>Home</Link>
            </li>
          </div>

        </nav>
      </div>
    )


  }
    
}

export default App;
