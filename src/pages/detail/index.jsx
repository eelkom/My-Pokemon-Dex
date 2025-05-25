import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../../mockData/mock";
import styled from "styled-components";
import { usePokemon } from "../../context/PokemonContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export default function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
  const { selectedPokemons, onAdd, onDelete } = usePokemon();

  let isAdd = true;
  selectedPokemons.forEach((pokemon) => {
    if (pokemon.id === Number(id)) {
      isAdd = false;
    }
  });
  const handleOnClick = (e) => {
    e.stopPropagation();
    isAdd ? onAdd?.(pokemon) : onDelete?.(pokemon);
  };
  return (
    <Container>
      {pokemon ? (
        <>
          <img src={pokemon.img_url} alt={pokemon.name} />
          <span>{pokemon.korean_name}</span>
          <span>{pokemon.types}</span>
          <span>No.{pokemon.id}</span>
          <span>.{pokemon.description}</span>
          <button onClick={() => navigate(-1)}>뒤로가기</button>
          <button onClick={handleOnClick}>{isAdd ? "추가" : "삭제"}</button>
        </>
      ) : (
        "x"
      )}
    </Container>
  );
}
