import React from "react";

export default function Filter({ filteredItems, selectedItem, onClick }) {
  return (
    <div className="col-2">
      <ul className="list-group">
        {filteredItems.map((item) => (
          <li
            className={
              selectedItem === item.name
                ? `list-group-item active`
                : `list-group-item`
            }
            key={item._id}
            onClick={() => onClick(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
