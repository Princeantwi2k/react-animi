import React, { Component } from "react";
import M from "materialize-css";
import one from "../../images/road.jpg";
import pic from "../../images/pic.jpg";
import three from "../../images/three.jpg";
import four from "../../images/four.jpg";
import five from "../../images/five.jpg";
import six from "../../images/six.jpg";
import "./styles.css";

class Notification extends Component {
  componentDidMount() {
    const options = {
      duration: 600,
      onCycleTo: () => {
        console.log("New Slide");
      },
    };
    M.Carousel.init(this.Carousel, options);
  }
  render() {
    return (
      <div>
        <div
          ref={(Carousel) => {
            this.Carousel = Carousel;
          }}
          className="carousel "
        >
          <a className="carousel-item">
            <img alt="1" src={one} className="images" />
          </a>
          <a className="carousel-item">
            <img alt="2" src={pic} className="images" />
          </a>
          <a className="carousel-item">
            <img alt="3" src={three} className="images" />
          </a>
          <a className="carousel-item">
            <img alt="4" src={four} className="images" />
          </a>
          <a className="carousel-item">
            <img alt="5" src={five} className="images" />
          </a>
          <a className="carousel-item">
            <img alt="6" src={six} className="images" />
          </a>
        </div>
      </div>
    );
  }
}

export default Notification;
