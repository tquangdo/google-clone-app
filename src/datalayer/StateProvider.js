import React, { createContext, useContext, useReducer } from "react";

// Preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({ propsReducer, propsInitialState, children }) => (
  <StateContext.Provider value={useReducer(propsReducer, propsInitialState)}>
    {children} {/* là <App />, xem index.js */}
  </StateContext.Provider>
);

/* Hook
1) search "KW" -> push "KW" into data layer
Search.js: gọi hàm useStateValue() để thông qua dispatch set giá trị "KW" vô "reducer" of reducer.js
2) pull information from the data layer
SearchPage.js: gọi hàm useStateValue() để get giá trị "KW" of "reducer"
3) use 2) to call func()
SearchPage.js: gọi hàm const { data } = useGoogleSearch(term)
*/
export const useStateValue = () => useContext(StateContext);
