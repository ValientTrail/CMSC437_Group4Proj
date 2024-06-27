import React from "react";
import WifiBar from "./componenets/wifibar/wifiBar";
import AppBackground from "./componenets/AppBackground/appBackground";

function App() {
  return (
    <div style={{
      position: "absolute",
      width:"100%",
      height: "100%"
    }}>
      <AppBackground page={<WifiBar style={{top:"10%", right: "10%"}}/>}/>
          
      </div>
  );
}

export default App;
