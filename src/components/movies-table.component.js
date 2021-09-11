import React from "react";
import Table from "../common/table.component";

export default function MoviesTable({ movies }) {
  
  // const columns = [
  //   { path: "posterurl", label: "Poster" },
  //   { path: "title", label: "Title" },
  //   { path: "imdbRating", label: "Rating" },
  //   { path: "your_rating", label: "Your Rating" },
  // ];

  const columns = [
    { label: "Poster", content: movie =>  <td><img style={{ width: "30px", height: "auto" }} src={movie.posterurl} alt="imag"/></td> },
    { label: "Title", content: movie => <td>{ movie.title }</td> },
    { label: "Rating", content: movie => <td>{ movie.imdbRating }</td> },
    { label: "Your Rating", content: movie => <td>{ movie.your_rating ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i> }</td> },
  ];

  return <Table columns={columns} items={movies} />;
}
