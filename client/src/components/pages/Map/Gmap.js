import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "1100px",
  height: "600px",
};

const center = {
  lat: 32.65232524845668,
  lng: 35.115580213917205,
};

function Gmap() {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyArH9pKnOkfFg79A3S6rSR1W_J9klaaNHM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Gmap);
