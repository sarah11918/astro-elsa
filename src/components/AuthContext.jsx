import React, { createContext } from 'react';

const authContext = createContext({
   auth: null,
   login: () => {},
   logout: () => {},
});
export default authContext;