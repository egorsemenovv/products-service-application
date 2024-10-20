import React, { useState } from "react";
import { createProduct } from "../../../services/api";
import "../CreateForm.css"


function CreateProductForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [startDate, setStartDate] = useState('');
    const [active, setActive] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedStartDate = new Date(startDate).toISOString();

        const productData = {
            productName: name,
            description: description,
            price: parseFloat(price),
            active: active,
            startDate: formattedStartDate
        };

        try {
            const result = await createProduct(productData);
            if (result && result.id) {
                setResponseMessage(`New product id: ${result.id}`);
            } else {
                setResponseMessage('Product created successfully');
            }
        } catch (error) {
            setResponseMessage('Error creating product');
        }
    };

    return (
        <div className="form-container">
            <h2>Create a New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Active:</label>
                    <input
                        type="checkbox"
                        checked={active}
                        onChange={(e) => setActive(e.target.checked)}
                    />
                    <span>{active ? 'Active' : 'Inactive'}</span>
                </div>
                <button type="submit">Create Product</button>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
    );
}

export default CreateProductForm;
