import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MainLayout from "./Layouts/MainLayout";
import SearchResults from "./pages/SearchResults";
import UserWatchList from "./pages/UserWatchList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <MovieDetails /> },
      { path: "/search", element: <SearchResults /> },
      { path: "/watchlist", element: <UserWatchList /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
