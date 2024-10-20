import React from 'react';

/**
 * @param {Object} props
 * @param {Object} props.product
 */
const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Color: {product.color.toLowerCase()}</p>
        </div>
    );
};

export default ProductCard;