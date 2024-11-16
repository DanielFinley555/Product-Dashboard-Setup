//Task 3: Create the ProductList Component

import React from 'react';

//Creating ProductList function
function ProductList({products}) {
    return (
        //using map render each product
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
