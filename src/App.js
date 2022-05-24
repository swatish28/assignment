import React, { useEffect, useRef } from "react";
import "leaflet-editable";
import ReactLeafletEditable from "react-leaflet-editable";
import { Map, TileLayer, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
//import Demo from "./components/map";
import DashboardComponent from "./components/dashboard";

function App() {

  return (
     <div>
       <DashboardComponent/>
     </div>
  );
}

export default App;
