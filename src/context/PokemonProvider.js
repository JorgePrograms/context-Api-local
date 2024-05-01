import { createContext, useState } from "react";

const PokemonContext = createContext();


const PokemonProvider = ({ children })=>{
    const [pokemons, setPokemons]= useState([
         { id: 1, name: "Bulbasaur", type: "Grass" },
        { id: 2, name: "Charmander", type: "Fire" },
        { id: 3, name: "Squirtle", type: "Water" },      
        {id: 4, name:"Pikachu", type: "electrico"}
    ]);
    
    return(
        <PokemonContext.Provider value={pokemons}>
            {children}
        </PokemonContext.Provider>
    );

}

export {PokemonContext, PokemonProvider};