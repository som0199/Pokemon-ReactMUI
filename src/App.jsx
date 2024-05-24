import React from 'react'
import Navbar from './components/Navbar'
import { ThemeProvider, createTheme } from '@mui/material'
import Form from './components/Form'
import PokemonCard from './components/PokemonCard'

const App = () => {
   const theme = createTheme({
    palette:{
      warning :{
        main : "#ffee58"
      },
      secondary:{
        main: "#78909c"
      }
    },
    typography:{
      h5:{
      fontFamily: '"Kode Mono", monospace',
      fontWeight:  "500",
      fontStyle: "normal",
    },
    h6:{
     fontFamily: '"Kanit", sans-serif',
     fontWeight: "400",
     fontStyle: "normal",
    },
    h4:{
      fontFamily: '"Anta", sans-serif',
      fontWeight : "400",
      fontStyle: "normal"
    }
  }
   })

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Form/>
      <PokemonCard/>
    </ThemeProvider >
  )
}

export default App