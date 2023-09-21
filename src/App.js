import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API

  state ={
    progress:0
  }
  setProgress =(progress)=>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <>
        <Router>
        <NavBar />
          <LoadingBar 
          height={3}
            color='#f11946'
            progress={this.state.progress}
            
          />
          
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress= {this.setProgress}
                  key="general" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress= {this.setProgress}
                  key="business" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress= {this.setProgress}
                  key="entertainment" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress= {this.setProgress} key="health" apiKey={this.apiKey} pageSize={this.pageSize} category="health" />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress= {this.setProgress}
                  key="science" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress= {this.setProgress} key="sports" apiKey={this.apiKey} pageSize={this.pageSize} category="sports" />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress= {this.setProgress}
                  key="technology" apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  category="technology"
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
    );
  }
}
