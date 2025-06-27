import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import Logo from "./components/logo";
import Loading from "./components/loading";
import ErrorMessage from "./components/ErrorMessage";
import SearchForm from "./components/SearchForm";
import WatchListButton from "./components/WatchListButton";

import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";
import Movie from "./components/Movie";
import MovieDetails from "./components/MovieDetails";

const api_key = "b06c4279d23840a7ced8ecb94f0faff4";
const page = 1;
const query = "batman";
const language = "en-US";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watchListMovies, setWatchListMovies] = useState([]);
  const [isWatchListOpen, setIsWatchListOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function getMovies() {
      setloading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&page=${page}&language=${language}&query=${searchQuery}`
        );

        // if (!response.status === 404) {
        //   throw new Error("Film bulunamadı (Movie not found)");
        // } else if (response.status === 401) {
        //   throw new Error("API anahtarı geçersiz (Invalid API key)");
        // } else if (response.status === 500) {
        //   throw new Error("Sunucu hatası (Server error)");
        // } else if (response.status === 503) {
        //   throw new Error(
        //     "Servis geçici olarak kullanılamıyor (Service unavailable)"
        //   );
        // } else if (response.status === 429) {
        //   throw new Error("Çok fazla istek yapıldı (Too many requests)");
        // } else if (response.status === 400) {
        //   throw new Error("Geçersiz istek (Bad request)");
        // } else if (response.status === 403) {
        //   throw new Error("Erişim reddedildi (Access denied)");
        // } else if (response.status === 408) {
        //   throw new Error("İstek zaman aşımına uğradı (Request timed out)");
        // }

        if (!response.ok) {
          throw new Error("Hata Oluştu (Error)");
        }

        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setloading(false);
    }

    if (searchQuery.length < 4) {
      setMovies([]);
      setError("");
      return;
    }

    getMovies();
  }, [searchQuery]);

  function handleAddToWatchList(movie) {
    const isAddedToList = watchListMovies.map((i) => i.id).includes(movie.id);

    if (!isAddedToList) {
      setWatchListMovies((movies) => [...movies, movie]);
    }
  }

  function handleRemoveFromWatchList(movie) {
    setWatchListMovies((movies) => movies.filter((i) => i.id !== movie.id));
  }

  function handleSelectedMovie(movie) {
    setSelectedMovie(movie);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header>
        <Logo />
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <WatchListButton
          movies={watchListMovies}
          onSetIsWatchListOpen={setIsWatchListOpen}
        />
      </Header>

      <Main>
        {selectedMovie && (
          <MovieDetails
            movieObj={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}

        <WatchList
          movies={watchListMovies}
          isWatchListOpen={isWatchListOpen}
          onRemoveFromWatchList={handleRemoveFromWatchList}
        />

        {loading && <Loading />}

        {!loading && !error && (
          <MovieList
            movies={movies}
            onAddToList={handleAddToWatchList}
            onSelectedMovie={handleSelectedMovie}
          />
        )}
        {error && <ErrorMessage message={error} />}
      </Main>
      <Footer />
    </>
  );
}
