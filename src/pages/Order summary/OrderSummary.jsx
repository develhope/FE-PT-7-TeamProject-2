import React from 'react'
import './OrderSummary.css'

function OrderSummary({ items, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <ul className="order-items">
        {items.map((item, index) => (
          <li key={index} className="order-item">
            <img src={item.imgSrc} alt={item.title} className="order-item-image" />
            <div className="order-item-details">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
            <button
              className="remove-item-button"
              onClick={() => onRemove(index)}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
      <div className="order-summary-total">
      <p className="order-total">Total: ${total}</p>
        <button className="button-submit">Checkout</button>
        </div>
    </div>
  );
}

export default OrderSummary
