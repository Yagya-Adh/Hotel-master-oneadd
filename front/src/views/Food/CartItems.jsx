import React, { useState } from 'react';
import ItemTable from './ItemTable';
import Cart from './Cart';

const CartItems = () => {

    const [cartItems, setCartItems] = useState([]);
    const items = [
        { id: 1, name: 'Fruit 1', price: 10.99 },
        { id: 2, name: 'Veg 2', price: 19.99 },
        { id: 3, name: 'Cheese 3', price: 5.99 },
        { id: 4, name: 'ice cream 3', price: 7.9 }
    ];


    const handleAddToCart = (item) => {
        // Check if the item already exists in the cart
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            // If the item exists, update the quantity
            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });

            setCartItems(updatedCartItems);
        } else {
            // If the item is not in the cart, add it with a quantity of 1
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const handleRemoveFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };



    return (
        <div className="App">
            <div className='flex flex-row justify-around'>
                <ItemTable items={items} handleAddToCart={handleAddToCart} />


                <Cart
                    cartItems={cartItems}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleQuantityChange={handleQuantityChange}
                />
            </div>

        </div>
    );
};

export default CartItems;
