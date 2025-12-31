
import React, { useState } from "react";
import './../styles/App.css';
import AuthContext from "./AuthContext";
import Auth from "./Auth";
const App = () => {
  const [checked,setChecked]=useState(false);

  function updateStatus(){
    setChecked(!checked);
  }

  return (
    <AuthContext.Provider value={{updateStatus,checked}}>
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      <Auth/>
    </div>
    </AuthContext.Provider>
  )
}

export default App
