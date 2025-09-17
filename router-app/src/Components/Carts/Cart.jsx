import React from "react";

export default function Cart({ cartItems, setCartItems }) {

    const handleRemove = (indexToRemove) => {
        const newCart = cartItems.filter((_, index) => index !== indexToRemove);
        setCartItems(newCart);
    };

    // Total price calculation
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center">Cart is empty.</p>
            ) : (
                <>
                    <div className="row">
                        {cartItems.map((item, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card shadow-sm">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt={item.title}
                                        style={{ height: "200px", objectFit: "contain" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p><strong>Price:</strong> ${item.price}</p>
                                        <button
                                            className="btn btn-danger btn-sm mt-2"
                                            onClick={() => handleRemove(index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total Price */}
                    <div className="text-end mt-4">
                        <h4>Total: ${totalPrice.toFixed(2)}</h4>
                    </div>
                </>
            )}
        </div>
    );
}
