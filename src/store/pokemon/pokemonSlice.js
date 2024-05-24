import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name : "pokemon",
    initialState : {
        pokemonData : null,
        isLoading: false,
        isError : false,
    },
    reducers : {},
    extraReducers:(builder)=>{
        builder.addCase(fetchPokemon.pending, (state,acion)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchPokemon.fulfilled, (state,action)=>{
            state.isLoading =false;
            state.isError = false;
            state.pokemonData = action.payload;
        })
        .addCase(fetchPokemon.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.pokemonData = null;
        });
    },
})
export default pokemonSlice.reducer


export const fetchPokemon = createAsyncThunk(
    "FETCH/POKEMON", async(name)=>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await response.json();
        console.log(data)
        return data
    }

)



