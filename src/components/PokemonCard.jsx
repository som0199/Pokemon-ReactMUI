import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const PokemonCard = () => {
  const customStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const { pokemonData, isLoading, isError } = useSelector(
    (state) => state.pokemon
  );

  if (!pokemonData) {
    return (
      <Typography variant="h5" align="center">
        Search Pokemon By Name
      </Typography>
    );
  }
  if (isError) {
    return (
      <Typography variant="h4" color={"error"} align="center">
        Something Went Wrong
      </Typography>
    );
  }
  if (isLoading) {
    return <CircularProgress color="warning" />;
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ padding: "5px" }}>
        <img
          src={pokemonData?.sprites.front_default}
          alt=""
          height={"200px"}
          width={"250px"}
        />
        <img
          src={pokemonData?.sprites.back_default}
          alt=""
          height={"200px"}
          width={"250px"}
        />
        <img
          src={pokemonData?.sprites.front_female}
          alt=""
          height={"200px"}
          width={"250px"}
        />
        <img
          src={pokemonData?.sprites.back_female}
          alt=""
          height={"200px"}
          width={"250px"}
        />
        <CardContent sx={customStyle}>
          <Typography gutterBottom variant="h4" component="div">
            {pokemonData?.name}
          </Typography>
        </CardContent>
        <Card sx={{ backgroundColor: "#30a7d7" }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Category:
              <Typography>{pokemonData.abilities[0].ability.name}</Typography>
              <Typography>{pokemonData.abilities[1].ability.name}</Typography>
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Abilities:
              <Typography>{pokemonData.abilities[0].ability.name}</Typography>
              <Typography>{pokemonData.abilities[1].ability.name}</Typography>
            </Typography>
          </CardContent>
        </Card>
        <CardActions>
          <Button size="small" variant="contained" color="secondary">
            {pokemonData.types[0].type.name}
          </Button>
        </CardActions>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PokemonCard;
