import React from 'react';
import Lonely_Planet_logo from "./Lonely_Planet_logo.png"
import "./style3.css"

export default function Part3() {
    return (
        <div className="Part3">
            <hr />
            <div className="Part3--cont">
                <div  className="Part3--columns">
                    <div className='column-1'> 
                        <img className="Lonely_Planet_logo" src={Lonely_Planet_logo} alt="logo" height="30px" />
                        <p className='column-1--text'>For Explorers Everywhere</p>
                        <p className='column-1--follow'>Follow us</p>
                        <p className='column-1--subscribe'>Subscribe</p>
                        <p className='column-1--offer'>Get 20% off our online shop.</p>
                        <input className='column-1--input' placeholder='Email adress'/>
                        <p className='column-1--subscribe-text'>Subscribe to Lonely Planet newsletters and promotions. Read our <a href='#'>Privacy Policy.</a></p>
                        <button className="sign-up">Sign up</button>
                    </div>
                    <div  className='column-2'>
                        <h2>TOP DESTINATIONS</h2>
                        <ul>
                            <li>New York City</li>
                            <li>Paris</li>
                            <li>Costa Rica</li>
                            <li>japan</li>
                            <li>USA</li>
                            <li>Amsterdam</li>
                            <li>Cancún</li>
                            <li>Chicago</li>
                            <li>England</li>
                            <li>Tokyo</li>
                            <li>France</li>
                            <li>Thailand</li>
                            <li>Ireland</li>
                            <li>Rome</li>
                            <li>London</li>
                            <li>Los Angeles</li>
                            <li>Mexico</li>
                            <li>Portugal</li>
                        </ul>
                    </div>
                    <div className='column-3'>
                    <h2>TRAVEL INTERESTS </h2>
                    <ul>
                        <li>Adventure Travel</li>
                        <li>Art and Culture</li>
                        <li>Beaches, Coasts, and Islands</li>
                        <li>Family Holidays</li>
                        <li>Festivals</li>
                        <li>Food and Drink</li>
                        <li>Honeymoon and Romance</li>
                        <li>Road Trips</li>
                        <li>Sustainable Travel</li>
                        <li>Travel Gear and Tech</li>
                        <li>Travel on a Budget</li>
                        <li>Wildlife and Nature</li>
                    </ul>
                    </div>
                    <div className='column-4'>
                        <div className='column-4--SHOP'>
                            <h2>SHOP</h2>
                            <ul>
                                <li>Destination guides</li>
                                <li>Lonely Planet Kids</li>
                                <li>Lonely Planet Shop</li>
                                <li>Non-English Guides</li>    
                            </ul>
                        </div>
                        <div>
                            <h2>ABOUT US</h2>
                            <ul>
                                <li>About Lonely Planet</li>
                                <li>Contact us</li>
                                <li>Press, Trade and Advertising</li>
                                <li>Privacy Policy</li>  
                                <li>Terms and conditions</li>
                                <li>Work for us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}