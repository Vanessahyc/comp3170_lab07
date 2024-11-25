import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './Countries';
import Details from './Details';

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
