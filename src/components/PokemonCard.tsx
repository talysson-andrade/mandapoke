import React from 'react';


interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    category: string;
    image_url: string;
    background_image_url: string;
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className='pokemon-card'>
        <img src={pokemon.background_image_url} className='pokemon-bg-image'/>
        <div className='pokemon-image-container'>
        <img src={pokemon.image_url} alt={pokemon.name} />
        </div>
        <div className='pokemon-info'>
          <h3>{pokemon.name}</h3>
          <p>Type: {pokemon.category}</p>
        </div>
    </div>
  );
};

export default PokemonCard;