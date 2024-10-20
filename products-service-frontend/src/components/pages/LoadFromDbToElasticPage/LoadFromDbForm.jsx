import React, { useState } from 'react';
import { loadProducts } from '../../../services/api';

function LoadFromDbForm() {
    const [active, setActive] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedStartDate = new Date(startDate).toISOString();

        const loadFilter = {
            active: active.toString(),
            startDate: formattedStartDate
        };

        try {
            const result = await loadProducts(loadFilter);
            if (result && result.loadAmount) {
                setResponseMessage(`${result.loadAmount} products was loaded to elastic`);
            } else {
                setResponseMessage('Products was loaded successfully');
            }
        } catch (error) {
            console.error('Error loading products:', error);
            setResponseMessage('Error loading products');
        }
    };

    return (
        <div className="form-container">
            <h2>Load Products from Database</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={active}
                            onChange={(e) => setActive(e.target.checked)}
                        />
                        Active
                    </label>
                </div>
                <div className="form-group">
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <button type="submit">Load Products</button>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
    );
}

export default LoadFromDbForm;