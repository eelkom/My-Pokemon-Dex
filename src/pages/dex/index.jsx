import { useState } from "react";
import Dashboard from "../../components/Dashboard";
import PokemonList from "../../components/PokemonList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default function Dex() {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const onAdd = (pokemon) => {
    if (selectedPokemons.length >= 6) {
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
      return;
    }
    if (!selectedPokemons.some((p) => p.id === pokemon.id)) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
    } else {
      alert("이미 선택된 포켓몬입니다.");
    }
  };

  const onDelete = (pokemon) => {
    if (selectedPokemons) {
      const updated = selectedPokemons.filter((p) => p.id !== pokemon.id);
      setSelectedPokemons(updated);
    }
  };

  return (
    <Container>
      <Dashboard
        pokemons={selectedPokemons}
        onAdd={onAdd}
        onDelete={onDelete}
      />
      <PokemonList onAdd={onAdd} onDelete={onDelete} />
    </Container>
  );
}
