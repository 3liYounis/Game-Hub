import { Grid, GridItem, Show, useBreakpointValue, Box } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import './App.css'
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const breakPoint = useBreakpointValue(
    {
      base: "base",
      lg: "lg",
    });
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Box position="sticky" top="0" maxHeight="100vh" overflowY="auto">
        <Show when={breakPoint != "base"}>
          <GridItem area="aside" paddingX={5} >
            <GenreList selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre}>
            </GenreList>
          </GridItem>
        </Show>
      </Box>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid >
  )
}
export default App;