import styled from "styled-components";
import MOCK_DATA from "../mockData/mock";
import PokemonCard from "./PokemonCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  max-width: 1000px;
`;

export default function PokemonList({ onAdd, onDelete }) {
  const pokemons = MOCK_DATA;
  return (
    <GridContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAdd}
          onDelete={onDelete}
          action="add"
        />
      ))}
    </GridContainer>
  );
}
