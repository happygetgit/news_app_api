import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import News from "./components/News.js";
import NewsItem from "./components/NewsItem.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    );
  }
}
