import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails({ products, onAddToCart }) {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <h2 className="text-center mt-5 text-danger">Product not found</h2>;
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-5 text-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                </div>
                <div className="col-md-7">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p>⭐ {product.rating.rate} ({product.rating.count} reviews)</p>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="btn btn-primary"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
