import React, { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { NewsContext } from "./context";

export const NewsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [newsState, newsDispatch] = useReducer(reducer, initialState);

  return (
    <NewsContext.Provider value={{ newsState, newsDispatch }}>
      {children}
    </NewsContext.Provider>
  );
};
