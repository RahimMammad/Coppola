import React, { useEffect, useState } from 'react';
import './Movies.scss';
import axios from 'axios';
import MovieCard from '../../components/MovieCard';
import useFetchData from '../../hooks/useFetch';

const Movies = () => {
  const { data, loading, error } = useFetchData("movies");

  return (
    <section>
      <div className="movies-main-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </section>
  );
};

export default Movies;
