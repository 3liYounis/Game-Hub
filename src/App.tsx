import { useState } from 'react'
import { Grid, GridItem, Show, useBreakpointValue, Button } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import './App.css'
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
        <GridItem area="aside" bg="gold">ASIDE</GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">MAIN</GridItem>
    </Grid >
  )
}
export default App;