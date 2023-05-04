import { GoogleMap } from "@react-google-maps/api";

const Map = (props) => {
    const {isLoaded} = props;

    const containerStyle = {
        width: '90vw',
        height: '90vh'
      };
      
      const center = {
        lat: -9.922710,
        lng: -76.241292
      };

    return isLoaded && (
        <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        ></GoogleMap>
        </>
    )
};

export default Map;