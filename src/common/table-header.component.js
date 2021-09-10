import React from 'react'

export default function TableHeader({ columns }) {
    return (
        <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.lablel} scope="col">
              {column.lablel}
            </th>
          ))}
        </tr>
      </thead>
    )
}
