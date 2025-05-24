import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../../mockData/mock";
import styled from "styled-components";

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
        </>
      ) : (
        "x" // 못찾았을때
      )}
    </Container>
  );
}
