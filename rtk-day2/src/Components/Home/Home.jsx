import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, insertProducts } from '../../slices/productSlice'

export default function Home() {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div>
            <button onClick={() => {
                dispatch(insertProducts({
                    title: "Mobile Charger",
                    price: 1200
                }))
            }}>Insert</button>
            <div>
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id}>
                            {product.id} — {product.title} — ₹{product.price}
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>

        </div>
    )
}
