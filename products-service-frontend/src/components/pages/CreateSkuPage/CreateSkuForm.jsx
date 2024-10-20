import React, { useState } from "react";
import { createSku } from "../../../services/api";
import "../CreateForm.css";

function CreateSkuForm() {
    const [productId, setProductId] = useState('');
    const [color, setColor] = useState('red');
    const [stock, setStock] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const skuData = {
            color: color,
            stock: parseInt(stock),
        };

        try {
            const result = await createSku(skuData, parseInt(productId));
            if (result && result.skuCode) {
                setResponseMessage(`New sku code: ${result.skuCode}`);
            } else {
                setResponseMessage('Sku created successfully');
            }
        } catch (error) {
            setResponseMessage('Error creating SKU');
        }
    };

    return (
        <div className="form-container">
            <h2>Create a New SKU</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Product ID:</label>
                    <input
                        type="number"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Color:</label>
                    <select
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        required
                    >
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Stock:</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create SKU</button>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
    );
}

export default CreateSkuForm;
