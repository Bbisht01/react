import React from 'react';

export const LoginContext = React.createContext({});
//provider obj - declare componwents to whom data to be shared
export const LoginProvider = LoginContext.Provider;
//consumer -  say how to consume the into
export const LoginConsumer = LoginContext.Consumer;

// export default LoginContext;
