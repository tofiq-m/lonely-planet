import React, { Component } from "react";
import { GetPlaces } from "../Fetch.js";
import lodingGif from "./load-loading.gif";
import "./cardStyles.css";

export default class MyData extends Component {
  state = {
    mydata: {},
    isLoaded: false
  };
  componentDidMount() {
    GetPlaces().then((Data) => {
      console.log(Data);
      this.setState({
        mydata: Data,
        isLoaded: true
      });
      // .catch((err) => console.log(err));
      console.log(this.state.mydata);
    });
  }
  render() {
    var { mydata, isLoaded } = this.state;
    // console.log(mydata);
    if (!isLoaded) {
      return (
        <div className="card-cont">
          <div className="card1">
            <img className="card-img" src={lodingGif} alt="loading" />
            <p>Loading..</p>
          </div>
          <div className="card2">
            <img className="card-img" src={lodingGif} alt="loading" />
            <p>Loading..</p>
          </div>
          <div className="card3">
            <img className="card-img" src={lodingGif} alt="loading" />
            <p>Loading..</p>
          </div>{" "}
          <div className="card4">
            <img className="card-img" src={lodingGif} alt="loading" />
            <p>Loading..</p>
          </div>
          <div className="card5">
            <img className="card-img" src={lodingGif} alt="loading" />
            <p>Loading..</p>
          </div>
          <div className="card6">
            <img className="card-img" src={lodingGif} alt="loading" />
            <p>Loading..</p>
          </div>
        </div>
      );
    } else {
      // console.log(mydata);
      return (
        <div className="card-cont">
          <div className="card1">
            <img
              className="card-img"
              src={mydata.data[0].result_object.photo.images.large.url}
              alt=""
            />
            <div className="card-txt">
              <p className="location">
                {mydata.data[0].result_object.location_string}
              </p>
              <h3>{mydata.data[0].result_object.name}</h3>
            </div>
          </div>
          <div className="card2">
            <img
              className="card-img"
              src={mydata.data[1].result_object.photo.images.large.url}
              alt=""
            />
            <div className="card-txt">
              <p className="location">
                {mydata.data[1].result_object.location_string}
              </p>
              <h3>{mydata.data[1].result_object.name}</h3>
            </div>
          </div>
          <div className="card3">
            <img
              className="card-img"
              src={mydata.data[2].result_object.photo.images.large.url}
              alt=""
            />
            <div className="card-txt">
              <p className="location">
                {mydata.data[2].result_object.location_string}
              </p>
              <h3>{mydata.data[2].result_object.name}</h3>
            </div>
          </div>
          <div className="card4">
            <img
              className="card-img"
              src={mydata.data[3].result_object.photo.images.large.url}
              alt=""
            />
            <div className="card-txt">
              <p className="location">
                {mydata.data[3].result_object.location_string}
              </p>
              <h3>{mydata.data[3].result_object.name}</h3>
            </div>
          </div>
          <div className="card5">
            <img
              className="card-img"
              src={mydata.data[4].result_object.photo.images.large.url}
              alt=""
            />
            <div className="card-txt">
              <p className="location">
                {mydata.data[4].result_object.location_string}
              </p>
              <h3>{mydata.data[4].result_object.name}</h3>
            </div>
          </div>
          <div className="card6">
            <img
              className="card-img"
              src={mydata.data[5].result_object.photo.images.large.url}
              alt=""
            />
            <div className="card-txt">
              <p className="location">
                {mydata.data[5].result_object.location_string}
              </p>
              <h3>{mydata.data[5].result_object.name}</h3>
            </div>
          </div>
        </div>
      );
    }
  }
}