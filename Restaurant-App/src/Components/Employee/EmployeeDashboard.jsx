import React, { useState } from "react";
import MenuList from "./MenuList";
import OrderSummary from "./OrderSummary";

export default function EmployeeDashboard() {
  const [orderItems, setOrderItems] = useState([]);

  const handleAddToOrder = (item) => {
    setOrderItems((prev) => [...prev, item]);
  };

  return (
    <div className="dashboard-container" style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 2 }}>
        <h3>🍽️ Menu</h3>
        <MenuList onAddToOrder={handleAddToOrder} />
      </div>

      <div style={{ flex: 1 }}>
        <h3>🧾 Current Order</h3>
        <OrderSummary items={orderItems} />
      </div>
    </div>
  );
}
