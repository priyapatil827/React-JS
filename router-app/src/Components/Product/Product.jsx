import React from "react";
import './Product.css'

export default function Product({ products, onAddToCart }) {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Products List</h1>
            <div className="row">
                {products.map((item) => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={item.image}
                                className="card-img-top"
                                alt={item.title}
                                style={{ height: "250px", objectFit: "contain" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text text-truncate">{item.description}</p>
                                <p className="mb-1">
                                    <strong>Category:</strong> {item.category}
                                </p>
                                <p className="mb-1">
                                    <strong>Price:</strong> ${item.price}
                                </p>
                                <p className="mb-1">
                                    ⭐ {item.rating.rate} ({item.rating.count} reviews)
                                </p>
                            </div>
                            <div className="card-footer text-center">
                                <button onClick={()=>onAddToCart(item)} className="btn btn-primary btn-sm">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
