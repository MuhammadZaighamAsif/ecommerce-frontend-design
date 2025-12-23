import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUserFriends, FaTruck } from 'react-icons/fa';
import { MdOutlineArrowBack } from 'react-icons/md';

// tech and cloth images
import product1 from "../assets/Image/cloth/4.png"; 
import saved1 from "../assets/Image/tech/2.png"; 
import saved2 from "../assets/Image/tech/1.png"; 

// payments images 
import p1 from "../assets/Image/payments/Misc/1.png"
import p2 from "../assets/Image/payments/Misc/2.png"
import p3 from "../assets/Image/payments/Misc/payment-1.png"
import p4 from "../assets/Image/payments/Misc/payment.png"
import p5 from "../assets/Image/payments/Misc/payment2.png"

const CartPage = () => {
    const navigate = useNavigate();

    const currentCart = [
        { id: 1, name: "Jeans with multiple colors, for men and lady", price: 78.99, qty: 1, color: "blue", material: "Plastic", img: product1 },
        { id: 2, name: "Men jeans with multiple colors, for men and lady", price: 39.00, qty: 1, color: "blue", material: "Plastic", img: product1 },
        { id: 3, name: "Iphone 15 pro max", price: 170.50, qty: 1, color: "red", material: "alumunium", img: saved2 },
    ];

    const savedForLater = [
        { id: 4, name: "Tablets - Black", price: 99.50, img: saved1 },
        { id: 5, name: "Iphone 15 pro - Red", price: 99.50, img: saved2 },
        { id: 6, name: "Android Tablet - Black", price: 99.50, img: saved1 },
        { id: 7, name: "Iphone 16 pro max - Red", price: 199.50, img: saved2 },
    ];

    const subtotal = currentCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = 14.00;
    const discount = 60.00;
    const total = subtotal - discount + tax;

    // Helper for cart item rendering
    const CartItem = ({ item }) => (
        <div className="flex items-start border-b border-gray-200 py-4">
            <div className="w-24 h-24 bg-gray-100 rounded mr-4 flex items-center justify-center">
                <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain p-1 mix-blend-multiply" />
            </div>
            <div className="flex-1">
                <h3 className="text-base font-medium text-gray-800">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-1">Size: medium, Color: {item.color}, Material: {item.material}</p>
                <p className="text-xs text-gray-500">Seller: Best factory Ld</p>
                <div className="flex gap-3 mt-2">
                    <button className="text-xs text-red-500 hover:underline">Remove</button>
                    <span className="text-xs text-gray-300">|</span>
                    <button className="text-xs text-blue-500 hover:underline">Save for later</button>
                </div>
            </div>
            <div className="w-24 text-right">
                <span className="font-semibold text-gray-900">${item.price.toFixed(2)}</span>
            </div>
            <div className="w-24 flex justify-end">
                <input 
                    type="number" 
                    defaultValue={item.qty} 
                    min="1"
                    className="w-16 border border-gray-300 rounded px-2 py-1 text-center text-sm" 
                />
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">My cart ({currentCart.length})</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Column: Cart Items and Security */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                        {currentCart.map(item => <CartItem key={item.id} item={item} />)}
                        
                        <div className="flex justify-between items-center pt-4">
                            <button 
                                onClick={() => navigate("/products")}
                                className="flex items-center border-2 text-blue-500 py-2 px-3 cursor-pointer rounded-md gap-2  font-medium hover:text-white hover:bg-blue-500 transition"
                            >
                                <MdOutlineArrowBack /> Back to shop
                            </button>
                            <button className="text-red-500 bg-white border-2 py-2 px-3 rounded-md cursor-pointer hover:text-white hover:bg-red-500">Remove all</button>
                        </div>
                    </div>

                    {/* Features/Secure Icons */}
                    <div className="flex justify-between bg-white rounded-lg p-4 shadow-md text-gray-600 text-sm">
                        <div className="flex items-center bg-blue-500 rounded-2xl py-2 px-3 text-white gap-2">
                            <FaLock className="text-white text-2xl " /> Secure payment
                        </div>
                        <div className="flex items-center bg-blue-500 rounded-2xl py-2 px-3 text-white gap-2">
                            <FaUserFriends className="text-white text-2xl" /> Customer support
                        </div>
                       <div className="flex items-center bg-blue-500 rounded-2xl py-2 px-3 text-white gap-2">
                            <FaTruck className="text-white text-2xl" /> Free delivery
                        </div>
                    </div>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Have a coupon?</h2>
                        <div className="flex mb-4">
                            <input type="text" placeholder="Add coupon" className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm outline-none"/>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg text-sm hover:bg-blue-700 transition">Apply</button>
                        </div>

                        <div className="border-t border-gray-200 pt-4 space-y-2 text-gray-700">
                            <div className="flex justify-between"><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></div>
                            <div className="flex justify-between"><span>Discount:</span><span className="text-red-500">-${discount.toFixed(2)}</span></div>
                            <div className="flex justify-between"><span>Tax:</span><span>+${tax.toFixed(2)}</span></div>
                        </div>

                        <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-900">Total:</span>
                            <span className="text-xl font-bold text-red-600">${total.toFixed(2)}</span>
                        </div>

                        <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg mt-4 hover:bg-green-700 transition">
                            Checkout
                        </button>
                        <div className="flex justify-center gap-2 mt-3 text-gray-500 text-xs">
                            <img src={p1} alt="Visa" />
                            <img src={p2} alt="MasterCard" />
                            <img src={p3} alt="Amex" />
                            <img src={p4} alt="PayPal" />
                            <img src={p5} alt="Discover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Saved for Later Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Saved for later</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {savedForLater.map(item => (
                        <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition flex flex-col items-center">
                            <div className="h-28 flex items-center justify-center mb-2">
                                <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                            </div>
                            <p className="text-sm font-medium text-gray-800 truncate w-full px-2">{item.name}</p>
                            <p className="text-lg font-bold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                            <button className="mt-3 text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
                                <MdOutlineArrowBack className="rotate-180" size={16} /> Move to cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Banner */}
            <div className="bg-blue-600 rounded-lg p-6 flex justify-between items-center mt-8">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Super discount on more than 100 USD</h3>
                    <p className="text-white text-opacity-80">Have you ever finally just write dummy info</p>
                </div>
                <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                    Shop now
                </button>
            </div>

        </div>
    );
};

export default CartPage;