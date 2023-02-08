import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
  const defaultProps = {
    center: {
      lat: 52.49666764294707,
      lng: 13.375656610796222,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        // apiKey="AIzaSyD5_Fs4X7W5c6ygVMLvu4dafB9-59UCfe4"
        bootstrapURLKeys={{ key: "AIzaSyD5_Fs4X7W5c6ygVMLvu4dafB9-59UCfe4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
