import React, { useState } from "react";
import { searchProducts } from '../../../services/api';
import ProductCard from './ProductCard';

function SearchComponent() {
    const [keyword, setKeyword] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!keyword.trim()) {
            alert('Please enter a keyword');
            return;
        }

        try {
            const result = await searchProducts(keyword);
            setProducts(result);
            setError(null);
        } catch (error) {
            setError('Failed to fetch products');
        }
    };

    return (
        <div className="App">
            <h1>Product Search</h1>
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter keyword"
            />
            <button onClick={handleSearch}>Search</button>

            {error && <p className="error">{error}</p>}

            <div className="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.skuId} product={product} />
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
}

export default SearchComponent;