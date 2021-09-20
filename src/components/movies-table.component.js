import React from "react";
import Table from "../common/table.component";

export default function MoviesTable({ movies, onSort, sortColumn }) {
  const columns = [
    {
      label: "Poster",
      path: "posterurl",
      content: (movie) => (
        <img
          style={{ width: "30px", height: "auto" }}
          src={movie.posterurl}
          alt="imag"
        />
      ),
    },
    { label: "Title", path: "title", content: (movie) => movie.title },
    {
      label: "Rating",
      path: "imdbRating",
      content: (movie) => movie.imdbRating,
    },
    {
      label: "Your Rating",
      path: "your_rating",
      content: (movie) =>
        movie.your_rating ? (
          <i className="bi bi-star-fill"></i>
        ) : (
          <i className="bi bi-star"></i>
        ),
    },
  ];

  return (
    <Table
      columns={columns}
      onSort={onSort}
      items={movies}
      sortColumn={sortColumn}
    />
  );
}
