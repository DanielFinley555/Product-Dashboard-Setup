//Task 4: Create the ProductItem Component

import React, { useState } from 'react';


function ProductItem() {
    const [name, price, description] = useState("Initial Message");

    return (
        <div>
            <h1>Name: {name}</h1>
            <p>price: ${price}</p>
            <p>description: {description}</p>
        </div>
    );
}

export default ProductItem;
