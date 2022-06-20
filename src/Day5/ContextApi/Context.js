import React from 'react';

const ImageContext = React.createContext();
//provider obj - declare componwents to whom data to be shared
export const ImageProvider = ImageContext.Provider;
//consumer -  say how to consume the into
export const ImageConsumer = ImageContext.Consumer;

export default ImageContext;
