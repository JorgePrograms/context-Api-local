import { useContext } from "react";
import { PokemonContext } from "../context/PokemonProvider";

const PokemonList = ()=>{
    const pokemons = useContext(PokemonContext);

    return (
      <div>
        <h2>Lista de Pokémon</h2>
        <ul>
          {pokemons.map(pokemon => (
            <li key={pokemon.id}>
              {pokemon.name} - Tipo: {pokemon.type}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default PokemonList