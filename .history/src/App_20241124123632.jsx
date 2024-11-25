// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Countries from './components/Countries';
import Details from './components/Details';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div>
      <Countries setSelectedCountry={setSelectedCountry}/>
      {selectedCountry && <Details country={selectedCountry} />}
    </div>
  )
}

export default App
