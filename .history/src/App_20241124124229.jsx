import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Countries from './components/Countries';
import Details from './components/Details';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Countries/>}>
          <Route path='countries/:cca2' element={<Details/>}/>
        </Route>
        <Route path='/countries' element={<Countries/>}>
          <Route path=':cca2' element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
