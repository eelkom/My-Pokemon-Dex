import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: coral;
  cursor: pointer;
  border-radius: 20px;

  & {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  }
`;

export default function PokemonCard({ pokemon, action }) {
  const { onAdd, onDelete } = usePokemon();
  const navigate = useNavigate();
  const isAdd = action === "add";
  const handleOnClick = (e) => {
    e.stopPropagation();
    isAdd ? onAdd?.(pokemon) : onDelete?.(pokemon);
  };

  return (
    <CardContainer onClick={() => navigate(`/detail?id=${pokemon.id}`)}>
      <img src={pokemon.img_url} alt={pokemon.name} />
      <span>{pokemon.korean_name}</span>
      <span>No.{pokemon.id}</span>
      <button onClick={handleOnClick}>{isAdd ? "추가" : "삭제"}</button>
    </CardContainer>
  );
}
