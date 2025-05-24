import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function Home() {
  return (
    <Container>
      <Link to="/dex">
        <button>포켓몬 도감 시작하기</button>
      </Link>
    </Container>
  );
}
