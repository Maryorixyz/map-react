import { useJsApiLoader } from '@react-google-maps/api';
import './App.css';
import Map from "./components/Map";
import { mapOptionKey } from './components/MapConfirmation';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';

import { Checkbox } from "primereact/checkbox";

function App() {

  const { isLoaded } = useJsApiLoader({
    id: mapOptionKey.googleMapApiKey,
    googleMapsApiKey: mapOptionKey.googleMapApiKey,
  })

  const categories = [
    { name: 'Crimenes', key: 'crimen' },
    { name: 'Accidentes', key: 'accidentes' },
    { name: 'Animales', key: 'animales' }
  ];
const [selectedCategories, setSelectedCategories] = useState([]);

const onCategoryChange = (e) => {
  let _selectedCategories = [...selectedCategories];

  if (e.checked) 
    _selectedCategories.push(e.value);
  else
    _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

  setSelectedCategories(_selectedCategories);

  console.log(_selectedCategories);

  let tem = []

  for (const category of _selectedCategories) {
    for (const e of datos[category.key]) {
      tem.push(e)
    }
  }

  setData(tem)
}

  const [ data, setData ] = useState([]);

  const datos = {
    crimen: [
      {
        name: 'location-1',
        icon: 'icons/info.png',
        location: {
          lat:-9.919885,
          lng: -76.236886,
        },
      } 
    ],

    accidentes: [
      {
        name: 'location-2',
        icon: 'icons/grave.png',
        location: {
          lat: -9.917999,
          lng: -76.238923,
        },
      },
    ],

    animales: [
      {
        name: 'location-3',
        icon: 'icons/pets.png',
        location: {
          lat: -9.918924,
          lng: -76.238301,
        },
      },
    ]
  }

return (
  <div className="App h-screen">
    <h1>
      Mapa del Distrito de Pillco Marca
    </h1>
    <div className='flex w-full justify-items-center flex-col h-full'>
      <div className='w-full max-w-screen-lg grid grid-cols-1 gap-4 md:grid-cols-3 mx-auto '>
        <Button label="Sector I" severity="info"/>
        <Button label="Sector II" severity="info"/>
        <Button label="Sector III" severity="info"/>
      </div>
      <div className='flex w-full mt-6 content-center h-full'>
        <div className='w-2/5'>
          <p>Leyenda</p>
        </div>
        <div className='w-3/5 flex mx-6 items-center h-full'>
          <Map isLoaded={isLoaded} data={data}/>
        </div>
      </div>
    </div>
    
    <div className="card flex justify-content-center">
        <div className="flex flex-column gap-3">
          {categories.map((category) => {
            return (
              <div key={category.key} className="flex align-items-center">
                <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                <label htmlFor={category.key} className="ml-2">
                  {category.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className='Division'>
        <div>
        </div>
      </div>
    </div>

  );
}

export default App;
