import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext)
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Filmes assistidos</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Filme" : "Filmes"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Sem filmes aqui, experimente adicionar um =)</h2>
        )}
      </div>
    </div>
  )
};
