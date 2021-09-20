import React from "react";
import TableBody from "./table-body.components";
import TableHeader from "./table-header.component";

export default function Table({ columns, items, onSort, sortColumn }) {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} items={items} />
    </table>
  );
}
