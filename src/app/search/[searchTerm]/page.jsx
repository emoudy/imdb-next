import MovieResults from "../../components/MovieResults";

export default async function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 ? (
        <h1 className="text-center pt-6">No Results Found</h1>
      ) : (
        <MovieResults results={results} />
      )}
    </div>
  );
}
