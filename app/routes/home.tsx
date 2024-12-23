import {
  Button,
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
import { useCharacters } from "~/hooks/characters";
import { useState } from "react";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rick and Morty" },
    { name: "description", content: "By Lwando" },
  ];
}

export default function Home() {
  const [page, setPage] = useState<number>(1)
  const { characters, loading, error } = useCharacters(page);
  const navigate = useNavigate()
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
        <Typography variant="h1">Ricky and Morty</Typography>
        <Typography variant="h6">By Lwando Kasuba</Typography>
        <Stack
        direction="row"
        spacing={2}
      >
          <Button disabled={page === 1} onClick={() => {
            setPage(page - 1)
          }}>
            Prev
          </Button>
          <Button onClick={() => {
            setPage(page + 1)
          }}>
            Next
          </Button>
        </Stack>
        {error && <Typography>{error}</Typography>}
        <Grid2 container spacing={2}>
          {!loading ? characters?.map((c) => (
            <Grid2 size={4} key={c.id}>
              <Card sx={{ width: '100%' }} key={c.id} onClick={() => {
                navigate(`/characters/${c.id}`)
              }}>
                <CardActionArea>
                  <CardMedia component="img" image={c.image} alt={c.name} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {c.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {c.status}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          )): (
            <CircularProgress />
          )}
        </Grid2>
      </Stack>
    </Container>
  );
}
