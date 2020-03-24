import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  //state = {  }
  render() {
    return (
      <div className="login">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
