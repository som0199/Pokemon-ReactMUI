import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { fetchPokemon } from "../store/pokemon/pokemonSlice";

const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPokemon(text));
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Typography
        variant="h6"
        sx={{ marginInline: "20px", marginTop: "20px", marginBottom: "10px" }}
      >
        Enter Pokemon Name
      </Typography>
      <TextField
        sx={{ margin: "0px 20px", marginBottom: "20px" }}
        variant="outlined"
        label="Search Here..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button
        type="submit"
        variant="contained"
        color="warning"
        sx={{ margin: "0px 0px" }}
      >
        <SearchIcon />
      </Button>
    </form>
  );
};

export default Form;
