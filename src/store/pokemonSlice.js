import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemons: [],
  selected: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon(state, action) {
      const pokemon = action.payload;
      if (state.selectedPokemons.length >= 6) {
        alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
        return;
      }
      const exists = state.selectedPokemons.some((p) => p.id === pokemon.id);
      if (exists) {
        alert("이미 선택된 포켓몬입니다.");
        return;
      }
      state.selectedPokemons.push(pokemon);
    },
    deletePokemon(state, action) {
      const pokemon = action.payload;
      state.selectedPokemons = state.selectedPokemons.filter(
        (p) => p.id !== pokemon.id
      );
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
