import { useState } from 'react'
import { Grid, GridItem, Show, useBreakpointValue, Button } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import './App.css'
import GenreList from './components/GenreList';
function App() {
  const breakPoint = useBreakpointValue(
    {
      base: "base",
      lg: "lg",
    });
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show when={breakPoint != "base"}>
        <GridItem area="aside">
          <GenreList>

          </GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid >
  )
}
export default App;