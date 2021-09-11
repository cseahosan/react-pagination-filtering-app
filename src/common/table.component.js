import React from "react";
import TableBody from "./table-body.components";
import TableHeader from "./table-header.component";

// const items = [{title:
// }];

export default function Table({ columns, items }) {
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody columns={columns} items={items} />
    </table>
  );
}
