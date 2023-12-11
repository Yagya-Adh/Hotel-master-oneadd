import React from "react";
import StripeCheckout from "react-stripe-checkout";


const Cart = ({ cartItems, handleRemoveFromCart, handleQuantityChange, handlePayment, }) => {

    const getTotalAmount = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
    };

    return (
        <div className="shadow-xl border p-1">
            <h2 className="text-xl p-2 bg-gray-300">Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>
                                <input
                                    className="w-24 h-8 mb-0  rounded-md "
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, parseInt(e.target.value))
                                    }
                                />
                            </td>
                            <td>
                                <button
                                    className="bg-rose-600 p-1 rounded-md transition-all hover:text-red-50"
                                    onClick={() => handleRemoveFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-xl">Total: ${getTotalAmount()}</p>
            <button
                className="bg-green-500 p-1 rounded-md text-white hover:bg-green-700 transition-all"
                onClick={handlePayment}
            >
                Payment
            </button>

            <StripeCheckout
                token={handlePayment}
                stripeKey="YOUR_STRIPE_API_PUBLISHABLE_KEY"
                amount={getTotalAmount() * 100} // Convert the total amount to the smallest currency unit (e.g., cents)
                name="Your Store"
                description="Payment for Items"
                currency="USD"
                billingAddress={true}
                zipCode={true}
                label="Payment"
            />
        </div>
    );
};

export default Cart;
