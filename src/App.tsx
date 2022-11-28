
import React from "react";
import Main from "./components/main";
import useAppContextValue, { AppContext } from './store/context';


function App() {
  // const defaultAppContextValue = useAppContextValue();

  return (
    <AppContext.Provider value={useAppContextValue()}>
    <Main />
  </AppContext.Provider>
  );
}

export default App;
