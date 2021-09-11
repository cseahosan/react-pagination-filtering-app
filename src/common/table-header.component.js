import React from "react";

export default function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.label} scope="col">
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
