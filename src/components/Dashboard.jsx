import { useEffect } from "react";
import { useSelector } from "react-redux";
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
export default function Dashboard() {
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );
  useEffect(() => {
    console.log("Dashboard 업데이트됨!", selectedPokemons);
  }, [selectedPokemons]);
  return (
    <DashboardContainer>
      {selectedPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} action="delete" />
      ))}
      {selectedPokemons.length === 0 && <span>Dashboard 영역입니다</span>}
    </DashboardContainer>
  );
}
