import { Grid, GridItem, Show, useBreakpointValue, Box, HStack } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import './App.css'
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformDropDown from './components/PlatformDropDown';
import { Platform } from './hooks/useGames';
import SortDropDown from './components/SortDropDown';
export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: string | null
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}>
            </GenreList>
          </GridItem>
        </Show>
      </Box>
      <GridItem area="main">
        <HStack>
          <PlatformDropDown onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortDropDown onSelectOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid >
  )
}
export default App;