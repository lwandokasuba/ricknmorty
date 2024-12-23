import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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

export default function Character({ params }: Route.ComponentProps) {
  if (params?.characterId) {
    return <div />;
  }
  const { character } = params?.characterId
    ? useCharacter(params?.characterId)
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
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </Stack>
    </Container>
  );
}
