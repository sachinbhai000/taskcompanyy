const BASE_URL = "https://swapi.dev/api/people";

export async function fetchStarWarsCharacters() {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data.results;
}
