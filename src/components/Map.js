import { GoogleMap, Marker } from "@react-google-maps/api";


const Map = (props) => {
    const {isLoaded} = props;

    const containerStyle = {
        width: '100%',
        height: '100%',
        maxHeight: '700px'
      };
      
      const center = {
        lat: -9.922710,
        lng: -76.241292
      };
      
      const segundoMarker = {
        lat: -9.917210,
        lng: -76.237470
      };

      
    return isLoaded && (
        <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          >
          {/* Marcadores */}
          {/* <Marker position={center}/>
          <Marker position={segundoMarker}/> */}
          {props.data .map((marker)=>{
            return(
              <div key={marker.name}>
                <Marker icon={marker.icon} position={marker.location}/>
              </div>
            )
          })}
        </GoogleMap>
        </>
    )
};

export default Map;