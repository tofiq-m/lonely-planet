import React, { Component } from 'react';
import search from "./Part2-search-icon.png";
import "./style2.css";



export default class Part2 extends Component {
     render() {
        return (
            <div className="Part2--cont">
                <div  className="part2--search"><input className="Part2--input" placeholder="Search for places" value="Paris"/>
                <a htmlFor="search" href="#"><img className="search-logo" src={search} alt="" height="20px" /> </a></div>
                <div className="Part2--filters">
                    <div className="filter1">
                        <label htmlFor="SelectValue1">Filter by type of place</label>
                        <select
                            className="SelectValue"
                            id="SelectValue1"
                            name="Filter by type of place"
                        >
                            <option value="All types">All types</option>
                            <option value="Continents & Subcontinents">Continents & Subcontinents</option>
                            <option value="Religions">Religions</option>
                            <option value="Contries">Contries</option>
                            <option value="Cities">Cities</option>
                            <option value="Neighborhoods">Neighborhoods</option>
                        </select>
                    </div>
                    <div className="filter2">
                        <label htmlFor="SelectValue2">Sort places by</label>
                        <select
                            className="SelectValue"
                            id="SelectValue2"
                            name="Sort places by"
                        >
                            <option value="Most poplar">Most popular</option>
                            <option value="A - Z">A - Z</option>
                            <option value="Z - A">Z - A</option>
                        </select>
                    </div>        
                </div>
            </div>
        );
    }
}
