import CityList from './components/CityList/src';

const cities = [
  {city: 'Algeciras', country: 'España', weather: 'sunny', temp: '20º'},
  {city: 'Madrid', country: 'España', weather: 'cloud', temp: '15º'},
  {city: 'Londres', country: 'Reino Unido', weather: 'rain', temp: '8º'},
  {city: 'Paris', country: 'Francia', weather: 'fog', temp: '10º'}
]

function App() {
  return (
    <div className="App">
        <CityList cities={cities}></CityList>
    </div>
  );
}

export default App;
