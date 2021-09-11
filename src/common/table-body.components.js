import React from "react";

export default function TableBody({ columns, items }) {
  return (
    <tbody>
      {items.map(item => {
        return <tr>{columns.map(column => column.content(item))}</tr>;
      })}
    </tbody>
  );
}
