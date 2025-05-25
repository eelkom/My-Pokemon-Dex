import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
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
    const updated = selectedPokemons.filter((p) => p.id !== pokemon.id);
    setSelectedPokemons(updated);
  };

  return (
    <PokemonContext.Provider value={{ selectedPokemons, onAdd, onDelete }}>
      {children}
    </PokemonContext.Provider>
  );
};
