import React from "react";
import Table from "../common/table.component";

export default function MoviesTable({ movies }){
  const columns = [
    {path: 'Poster', label: "Poster"},
    {path: 'Title', label: "Title"},
    {path: 'Poster', label: "Rating"},
    {path: 'Your Rating ', label: "Your Rating"}
  ];

  return <Table columns={columns} items = {movies} />;
};