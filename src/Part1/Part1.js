import React, { Component } from "react";
import logo from "./lonely-planet-logo-white.png";
import search from "./Part1-search-icon.png";
import "./style1.css";

export default class Part1 extends Component {
  state = {
    closeAlert: false
  }
  closeAlert = (e) => {
    this.setState({closeAlert: true})
  }
  render() {
    return (
      <div className="Part1--cont">
        {!(this.state.closeAlert) ?
            <aside className="part1--alert">
              <div className="part1--cmp">
                <p className="alert-text">Discover our Best in Travel 2022 list of must-see destinations and experiences.  
                  <a href="#" className="learn-more">Learn More</a></p>
                <p className="closeBtn" onClick={this.closeAlert}>✖</p>
              </div>
            </aside>
            : null}
          <main>
            <nav>
              <div  className="part1--search"><input id="search"/> <a htmlFor="search" href="#"><img className="search-logo" src={search} alt="" height="20px" /></a></div>
              <img className="logo" src={logo} alt="logo" height="100px" />  
                <ul  className="nav--links">
                  <li className="nav--link">Destinations</li>
                  <li className="nav--link">Stories</li>
                  <li className="nav--link">Shop</li>
              </ul>
                <div className="nav--hamburger-cont">
                <ul className="nav--hamburger">
                      <li className="bar-1"></li>
                      <li className="bar-2"></li>
                      <li className="bar-3"></li>
                </ul>
            </div>
            </nav>
            <h1 className="text header-text">Discover story-worthy travel moments</h1>
            <p className="text second-text">Eyes On Asia / Stocksy United</p>
          </main>
      </div>
    );
  }
}
