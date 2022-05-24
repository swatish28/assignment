import React, { useEffect, useRef } from "react";
import "leaflet-editable";
import ReactLeafletEditable from "react-leaflet-editable";
import { Map, TileLayer, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Demo({editRef}) {
  //const editRef = useRef();
  const [map, setMap] = React.useState();
  const mapRef = useRef();
//   const editPolygon = () => {
//     editRef.current.startRectangle();
//     //var seeArea = L.GeometryUtil.geodesicArea(layer.getLatLngs());
//     console.log(editRef.current.startRectangle());
//     console.log(map.getBounds)
//   };

  

  useEffect(() => {
    if (!mapRef.current) return;

    setMap(mapRef.current.leafletElement);
  }, []);
  const purpleOptions = { color: 'purple' }
  return (
    <ReactLeafletEditable ref={editRef} map={map}>
      <Map
        style={{
          height: "100vh",
          backgroundColor: "",
          flexGrow: "1",
          cursor: `10`
        }}
        ref={mapRef}
        editable={true}
        zoom={4}
        maxZoom={18}
        center={[35, 105]}
      >
        <LayerGroup>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer url="http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png" />
        </LayerGroup>
        {/* <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}
      </Map>
    </ReactLeafletEditable>
  );
}

export default Demo;
