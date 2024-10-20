/**
 * @typedef {Object} Product
 * @property {number} productId
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {boolean} active
 * @property {string} startDate
 * @property {number} skuId
 * @property {string} code
 * @property {number} stock
 * @property {string} color
 */

/**
 * @param {string} keyword
 * @returns {Promise<Product[]>}
 */

export const searchProducts = async (keyword) => {
    try {
        const response = await fetch(`/api/v1/search?keyword=${keyword}`, {
            method: "GET",
            headers: {
                "Acces-Allow-Origin": "http://localhost:3000",
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        return data['found products'];
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};


export const createProduct = async (productData) => {
    try {
        const response = await fetch('/api/v1/product', {
            method: 'POST',
            headers: {
                "Acces-Allow-Origin": "http://localhost:3000",
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            throw new Error('Failed to create product');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

/**
 * @param {Object} skuData
 * @param {number} productId
 * @returns {Promise<Object>}
 *   - {string} skuCode
 *   - {string} message
 *
 * @throws {Error}
 */
export const createSku = async (skuData, productId) => {
    const response = await fetch(`/api/v1/sku/${productId}`, {
        method: "POST",
        headers: {
            "Acces-Allow-Origin": "http://localhost:3000",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(skuData),
    });

    if (!response.ok) {
        throw new Error("Failed to create SKU");
    }

    return response.json();
};

export const loadProducts = async (loadFilter) => {
    const response = await fetch(`/api/v1/load`, {
        method: "POST",
        headers: {
            "Acces-Allow-Origin": "http://localhost:3000",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(loadFilter)
    });

    if (!response.ok) {
        throw new Error("Failed to load products");
    }

    return response.json();
};