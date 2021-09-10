import React from "react";
import TableHeader from "./table-header.component";

export default function Table({ columns, items }) {
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <tbody>
        {items.map((item) => {
          return (
            <tr>
              <th scope="row">
                <img
                  style={{ width: "30px", height: "auto" }}
                  src={item.posterurl}
                  alt="imag"
                />
              </th>
              <td>{item.title}</td>
              <td>
                <i class="bi bi-star"></i>
                {item.imdbRating}
              </td>
              <td>
                {item.your_rating ? (
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
}
