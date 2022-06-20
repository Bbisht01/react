import React, { Component } from 'react';
import { images } from './Gallery';
import './Images.css';
export default class Images extends Component {
  render() {
    return (
      <div className="imageContainer">
        {images?.map((ele, ind) => (
          <div key={ind} className="image_parent">
            <img src={ele.image_url} alt="images" width="100%" />
            <h2>{ele.name}</h2>
            <div className="imageDiv">
              {ele.tags?.map((item, i) => (
                <div key={i}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
