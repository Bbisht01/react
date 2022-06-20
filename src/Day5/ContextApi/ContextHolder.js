import React, { Component, useContext } from 'react';
import ImageContext, { ImageProvider } from './Context';
import './ContextHolder.css';
import axios from 'axios';

export default class ContextHolder extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      errorMsg: '',
    };
  }
  componentDidMount() {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const p = res.data;
        this.setState({ users: p });
        // console.log(this.state.users);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: `error occured ${error.response.status}` });
      });
  }

  render() {
    // console.log(this.state.users);
    // const data = this.state.users;
    // console.log(data);

    return (
      <div>
        <ImageProvider value={this.state.users}>
          <DataChild />
          <DataChild1 />
        </ImageProvider>
      </div>
    );
  }
}

function DataChild() {
  const images = useContext(ImageContext);
  console.log(images);
  return (
    <div className="imageContainer">
      {images.map((el, index) => {
        return (
          <div>
            <img src={el.image} width="50%" />
            <h4>{el.title}</h4>
            <h4>&#x20B9; {el.price}</h4>
            <p>{el.rating.rate}</p>
          </div>
        );
      })}
    </div>
  );
}
function DataChild1() {
  const images = useContext(ImageContext);
  return (
    <div className="imageContainer">
      {images.map((el, index) => {
        return (
          <div>
            <img src={el.image} width="50%" />
            <h4>{el.title}</h4>
            <h4>&#x20B9; {el.price}</h4>
            <p>{el.rating.rate}</p>
          </div>
        );
      })}
    </div>
  );
}
