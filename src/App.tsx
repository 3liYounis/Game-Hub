import { useState } from 'react'
import { Grid, GridItem, Show, useBreakpointValue } from '@chakra-ui/react'
import './App.css'
function App() {
  const breakPoint = useBreakpointValue(
    {
      base: "base",
      lg: "lg",
    });
  console.log(breakPoint)
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="coral">NAV</GridItem>
      <Show when={breakPoint != "base"}>
        <GridItem area="aside" bg="gold">ASIDE</GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">MAIN</GridItem>
    </Grid >
  )
}

export default App;