import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import type { Route } from "./+types/home";
import { useCharacter } from "~/hooks/characters";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rick and Morty" },
    { name: "description", content: "By Lwando" },
  ];
}


export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  return params?.characterId
}


export default function Character({
  loaderData,
}: Route.ComponentProps) {
  console.log(loaderData)
  const { character, loading } = loaderData
    ? useCharacter(loaderData)
    : {};
  return (
    <Container>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">Character</Typography>
        <Typography variant="h6">By Lwando Kasuba</Typography>
        {loading && <CircularProgress />}
        {character && (
          <Card sx={{ width: "100%" }} key={character.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={character.image}
                alt={character.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {character.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {character.status}
                  {' '}
                  {character.created}
                  {' '}
                  {character.species}
                  {' '}
                  {/* {character.location} */}
                  {...character.episode.map((c) => `${c}, `)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </Stack>
    </Container>
  );
}
