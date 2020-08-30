import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, Button } from "@material-ui/core";
import Search from "./Search";
import { signInWithGoogle } from "../helpers/auth"
import { auth } from "../services/firebase"

class Home extends Component {
  constructor() {
    super()
    this.state = {
      user: auth().currentUser,
    }
    this.onGGLogIn = this.onGGLogIn.bind(this);
    this.onGGLogOut = this.onGGLogOut.bind(this);
  }
  async onGGLogIn() {
    try {
      await signInWithGoogle();
      this.setState({
        user: auth().currentUser,
      })
    }
    catch (err) {
      alert('ERR: ' + err.message);
    }
  }

  async onGGLogOut() {
    try {
      await auth().signOut();
      this.setState({
        user: null,
      })
    }
    catch (err) {
      alert('ERR: ' + err.message);
    }
  }

  render() {
    const { user } = this.state
    return (
      <div className="home">
        <div className="home__header">
          <div>
            {
              (user)
                ?
                <Button variant="contained" color="secondary" onClick={this.onGGLogOut}>
                  Logout
            </Button>
                :
                <Button variant="contained" color="primary" onClick={this.onGGLogIn}>
                  Login với Google
            </Button>
            }
          </div>
          <div className="home__headerRight">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <AppsIcon />
            {
              (user)
                ?
                <small style={{
                  textAlign: 'center',
                  position: 'relative',
                  '& button': {
                    position: 'absolute',
                    top: '80%',
                    left: '70%'
                  }
                }}>
                  <img src={user.photoURL} alt="" style={{
                    width: 40,
                    height: 40,
                    objectFit: 'cover',
                    maxWidth: '100%',
                    borderRadius: '50%'
                  }} />
                </small>
                :
                <Avatar />
            }
          </div>
        </div>
        <div className="home__body">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="" />
          <div className="home__inputContainer">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
