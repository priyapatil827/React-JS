import React, { useEffect, useState } from "react";

export default function MenuList({ onAddToOrder }) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div className="menu-list">
      {menu.map((item) => (
        <div key={item.id} className="menu-item" style={{ display: "flex", justifyContent: "space-between", margin: "8px 0", padding: "8px", borderBottom: "1px solid #ddd" }}>
          <span>{item.id}</span>
          <span>{item.name}</span>
          <span>₹{item.category}</span>
          <span>{item.description}</span>
          <span>₹{item.price}</span>
          <button onClick={() => onAddToOrder(item)}>Add</button>
        </div>
      ))}
    </div>
  );
}
