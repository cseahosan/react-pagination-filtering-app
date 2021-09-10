import React from "react";

export default function MoviesTable({ movies }){
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Poster</th>
          <th scope="col">Title</th>
          <th scope="col">Rating</th>
          <th scope="col">Your Rating</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => {
          return (
            <tr>
              <th scope="row">
                <img
                  style={{ width: "30px", height: "auto" }}
                  src={movie.posterurl}
                  alt="imag"
                />
              </th>
              <td>{movie.title}</td>
              <td>
                <i class="bi bi-star"></i>
                {movie.imdbRating}
              </td>
              <td>
                {movie.your_rating ? (
                  <i class="bi bi-star-fill"></i>
                ) : (
                  <i class="bi bi-star"></i>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};