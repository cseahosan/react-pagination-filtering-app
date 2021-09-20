import React from "react";

export default function TableHeader({ columns, onSort, sortColumn }) {
  const handleSort = (path) => {
    if (sortColumn.path === path) {
      if (sortColumn.order === "asc") onSort({ path, order: "desc" });
      else onSort({ path, order: "asc" });
    } else onSort({ path, order: "asc" });
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.label}
            scope="col"
            onClick={() => handleSort(column.path)}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
