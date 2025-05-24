import { useEffect } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;

  height: 200px;
  gap: 20px;
`;
export default function Dashboard({ pokemons, onAdd, onDelete }) {
  useEffect(() => {
    console.log("Dashboard 업데이트됨!", pokemons);
    console.log(pokemons);
  }, [pokemons]);
  return (
    <DashboardContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAdd}
          onDelete={onDelete}
          action="delete"
        />
      ))}
      {pokemons.length == 0 && <span>Dashboard 영역입니다</span>}
    </DashboardContainer>
  );
}
