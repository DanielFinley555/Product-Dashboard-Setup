//Task 4: Create the ProductItem Component

//ChildComponent
import React from 'react';

//creating child component funtion
function ProductItem({name, price, description}) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>price: ${price}</p>
            <p>description: {description}</p>
        </div>
    );
}

export default ProductItem;
