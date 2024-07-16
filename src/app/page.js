import MovieResults from "./components/MovieResults";

const API_KEY = process.env.API_KEY;

const Home = async({ searchParams }) => {
  const genre = searchParams.genre || 'trending';
  const category = genre === 'trending' ? 'trending/all/week' : `movie/top_rated`;
  const res = await fetch(`https://api.themoviedb.org/3/${category}?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json();

  if (!res.ok) {
    // return <div>Failed to load</div>;
    throw new Error('Failed to fetch data');
  }

  const results = data.results;
  console.log(results);

  return (
    <div>
      <MovieResults results={results} />
    </div>
  )
}

export default Home;