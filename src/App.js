import React from "react";
import Home from "./Pages/Home/Home";
import "./App.scss";
import { Provider } from "react-redux"; 
import store from './redux/store'; 

function App() {
  return (
    <Provider store={store}> 
    <div>
      <Home />
    </div>
    </Provider> 
  );
}

export default App;
