import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [product, setProduct] = useState([
        { id: 1, name: "Cheezy Hamburger", price: 20, image: "https://i.pinimg.com/736x/33/6f/49/336f4969f18cc575675c4f485443c383.jpg" },
        { id: 2, name: "French Fries", price: 15, image: "https://i.pinimg.com/1200x/4e/83/09/4e8309fc0f2d240853acedc8f3409313.jpg" },
        { id: 3, name: "Cold Drink", price: 10, image: "https://i.pinimg.com/1200x/45/07/fd/4507fdad6d96271af132d1f007863f09.jpg" },
    ]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [index, setIndex] = useState(0);

    const addProduct = () => {
        const searchKeyword = name.trim() || "food";
        const randomImage = `https://source.unsplash.com/300x300/?${encodeURIComponent(searchKeyword)}`;

        const newProduct = {
            id: product.length + 1,
            name: name,
            price: price,
            image: image || randomImage,
        };

        setProduct([...product, newProduct]);
        setName("");
        setPrice("");
        setImage("");
    };

    const editProduct = (i) => {
        setIndex(i);
        setName(product[i].name);
        setPrice(product[i].price);
        setImage(product[i].image);
    };

    const removePrduct = (i) => {
        const newProduct = [...product];
        newProduct.splice(i, 1);
        setProduct(newProduct);
    };

    return (
        <div>
            <h2>E-Commerce Website</h2>
            <input
                type="text"
                placeholder="Enter Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-product"
            />

            <input
                type="text"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input-product"
            />

            <input
                type="text"
                placeholder="Enter Image URL (optional)"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="input-product"
            />

            <button className="add-product" onClick={addProduct}>Add</button>

            <div className="product-list">
                {product.map((p, i) => (
                    <div className="product-card">
                        <img src={p.image} alt={p.name} />
                        <h3>{p.name}</h3>
                        <p>${p.price}</p>
                        <div className="btn-group">
                            <button className="edit-product" onClick={() => editProduct(i)}>Update</button>
                            <button className="remove-product" onClick={() => removePrduct(i)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
