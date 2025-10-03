import { Grid, GridItem, Show, useBreakpointValue, Box, HStack, Heading, Stack } from '@chakra-ui/react'
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
  sortOrder: string | null,
  searchText: string | null
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const platform = gameQuery.platform ? gameQuery.platform.name : "";
  const genre = gameQuery.genre ? gameQuery.genre.name : "";
  const heading = platform + " " + genre + " Games";

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
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}></NavBar>
      </GridItem>
      <Box position="sticky" top="0" maxHeight="100vh" overflowY="auto">
        <Show when={breakPoint != "base"}>
          <GridItem area="aside" paddingX={5} >
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>
        </Show>
      </Box>
      <GridItem area="main">
        <Stack alignItems="center" marginBottom={4}>
          <Heading fontFamily="cursive" fontSize={40} marginBottom={2} paddingX={2} paddingY={5}>{heading}</Heading>
          <HStack>
            <PlatformDropDown onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
            <SortDropDown onSelectOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </HStack>
        </Stack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid >
  )
}
export default App;