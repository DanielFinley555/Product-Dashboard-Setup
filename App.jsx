//Task 1: Set Up the React Environment with Vite using terminal



//Task 2: Create the App Component

import React, {useState} from 'react';

function Add() {
//Using useState to initialize product list
    const [product, setProduct] = useState([
        { id: 1, name: 'Laptop', price: 850, description: 'A portable computer'},
        { id: 2, name: 'TV', price: 400, description: 'electroncic object that can display visuals'},
        { id: 3, name: 'Speaker', price: 125, description: 'To listen to audio out loud'},
        { id: 4, name: 'Phone', price: 400, description: 'mobile mini copmuter that can be used for communication'},
        { id: 5, name: 'Headphones', price: 200, description: 'Placed over your head and ears to listion to audio' },
    ]);

//Creating add product funtion
    function AddProductForm() {
        const [products, setProducts] = useState([]);
        
        const addProduct = (product) => {
            
            setProducts([...products, product]);
        };
        
        return (
            <div>
                <h2>Add Product Form</h2>
                <button onClick={() => addProduct('Laptop')}>Add Laptop</button>
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>{product}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    export default Add;