import { useJsApiLoader } from '@react-google-maps/api';
import './App.css';
import Map from "./components/Map";
import { mapOptions } from './components/MapConfirmation';

function App() {

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  })

  return (
    <div className="App">
      <h1>
        Map REACT
      </h1>
      <Map isLoaded={isLoaded}/>
    </div>
  );
}

export default App;
