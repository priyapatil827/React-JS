import React from "react";

export default function OrderSummary({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="order-summary">
      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}

      <h4 style={{ marginTop: "20px" }}>Total: ₹{total}</h4>
      <button
        disabled={items.length === 0}
        onClick={() => alert("✅ Order Placed Successfully!")}
      >
        Place Order
      </button>
    </div>
  );
}
