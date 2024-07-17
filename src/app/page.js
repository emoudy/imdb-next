import MovieResults from "./components/MovieResults";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "trending";
  const category = genre === "trending" ? "trending/all/week" : "movie/top_rated";
  const getMoviesURL = `https://api.themoviedb.org/3/${category}?api_key=${API_KEY}&language=en-US&page=1`;

  const res = await fetch(getMoviesURL, {next: { revalidate: 600 }})
  const data = await res.json();

  if (!res.ok) {
    // This will activate the closest `error.jsx` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const movies = data.results;

  return (
    <div>
      <MovieResults results={movies} />
    </div>
  )
};