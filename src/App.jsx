import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import Logo from "./components/logo";
import Loading from "./components/loading";
import SearchForm from "./components/SearchForm";
import WatchListButton from "./components/WatchListButton";

import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";

const api_key = "b06c4279d23840a7ced8ecb94f0faff4";
const page = 1;
const query = "batman";
const language = "en-US";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setloading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=batman&page=${page}&language=${language}&query=${query}`
      );

      const data = await response.json();
      setMovies(data.results);
      setloading(false);
    }
    getMovies();
  }, []);

  function handleAddToWatchList(movie) {
    const isAddedToList = watchListMovies.map((i) => i.id).includes(movie.id);

    if (!isAddedToList) {
      setWatchListMovies((movies) => [...movies, movie]);
    }
  }

  function handleRemoveFromWatchList(movie) {
    setWatchListMovies((movies) => movies.filter((i) => i.id !== movie.id));
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchForm />
        <WatchListButton
          movies={watchListMovies}
          onSetIsWatchListOpen={setIsWatchListOpen}
        />
      </Header>

      <Main>
        <WatchList
          movies={watchListMovies}
          isWatchListOpen={isWatchListOpen}
          onRemoveFromWatchList={handleRemoveFromWatchList}
        />

        {loading ? (
          <Loading />
        ) : (
          <MovieList movies={movies} onAddToList={handleAddToWatchList} />
        )}
      </Main>
      <Footer />
    </>
  );
}
