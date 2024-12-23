import React from "react";
import type { Character } from "~/types/character";

export function useCharacters(page?: number) {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string>();

  React.useEffect(() => {
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character?page=${page ? page : 1}`)
    .then(async (res) => {
      const json = await res?.json()
      setCharacters(json?.results as unknown as Character[])
    })
    .catch((error) => {
      setError(error.message)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [page]);

  return { characters, loading,  error}
}

export function useCharacter(id: string) {
  const [character, setCharacters] = React.useState<Character>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string>();

  React.useEffect(() => {
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(async (res) => {
      const json = await res?.json()
      setCharacters(json?.results as unknown as Character)
    })
    .catch((error) => {
      setError(error.message)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [id]);

  return { character, loading,  error}
}