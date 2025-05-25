import { PokemonProvider } from "../../context/PokemonContext";
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
  return (
    <Container>
      <Dashboard />
      <PokemonList />
    </Container>
  );
}
