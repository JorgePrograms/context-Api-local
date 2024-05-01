import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import {PokemonProvider} from './context/PokemonProvider'
import PokemonList from './components/PokemonList';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
    <PokemonProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PokemonProvider>
  </Router>
  );
}

export default App;
