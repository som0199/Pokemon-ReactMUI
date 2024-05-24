import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Navbar = () => {
  return (
    <AppBar color={"warning"} position='relative'>
        <Toolbar>
            <IconButton 
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}>
            <CatchingPokemonIcon/>
        </IconButton>
      
        <Typography variant="h5">Pokedex</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar