import { Provider } from "react-redux";
import Dashboard from "../../components/Dashboard";
import PokemonList from "../../components/PokemonList";
import styled from "styled-components";
import store from "../../store/store";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Dex() {
  return (
    <Provider store={store}>
      <Container>
        <Dashboard />
        <PokemonList />
      </Container>
    </Provider>
  );
}
