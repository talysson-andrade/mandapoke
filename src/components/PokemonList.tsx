import React, { useState, useEffect} from "react";
import axios from 'axios';
import PokemonCard from './PokemonCard'


interface Pokemon {
    id: number;
    name: string;
    category: string;
    image_url: string;
    background_image_url: string;
}


const PokemonList: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getPokemons = async () => {
            try {
                var url:string
                if (searchTerm === ''){
                    url = 'https://dev-api-teste.mandarin.com.br/pokemons'
                } else{
                    url = `https://dev-api-teste.mandarin.com.br/pokemons?name=${searchTerm}`
                }
                const response = await axios.get(url);
                setPokemons(response.data);
            } catch (err) {
                console.error("Ocorreu um erro ao buscar Pokemons: ", err);
            }
        };
        
        getPokemons();
    }, [searchTerm]);

    const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    

    return (
        <div>
        <input type="text" placeholder="Buscar Pokemon..."  value={searchTerm} onChange={handleSearch}/>
        <div id="pokemon-list">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        </div>
      );
};

export default PokemonList;