import React, { useEffect, useState } from 'react'
import PokemonCard from "./components/PokemonCard"
import { Button } from "reactstrap"
import "./App.css"

const App = () => {
  const[allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    console.log(loadMore)
    setLoadMore(data.next)
    console.log(loadMore)

    function createPokemonObject(results)  {
      results.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( pokeList => [...pokeList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

useEffect(() => {
  getAllPokemons()
}, [])

  return (
    <div className="app-contaner">
      <h1>Pokedex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) => 
            <PokemonCard
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />
          )}
              <Button className="load-more" onClick={() => getAllPokemons()}>Load more</Button>
        </div>
      </div>
    </div>
  );
}

export default App;