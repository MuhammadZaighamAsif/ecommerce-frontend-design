import React from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import { FaHeart, FaStar, FaShoppingCart , FaCheck } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';

// Mock Image Imports
import shirtImage from "../assets/Image/cloth/4.png"; 
import related1 from "../assets/Image/tech/1.png";
import related2 from "../assets/Image/tech/2.png";

const DetailPage = () => {
    const navigate = useNavigate();
    const { id : _id } = useParams(); 

    const product = {
        name: "Mens jeans ",
        price: 98.00,
        oldPrice: 112.00,
        reviews: 32,
        orders: 154,
        description: "This is my product description. It provides detailed information about the product, including its features, specifications, and benefits.",
        details: [
            { label: "Model", value: "#678909" },
            { label: "Style", value: "Western style" },
            { label: "Certificate", value: "ISO-89891212" },
            { label: "Size", value: "34mm x 450mm x 19mm" },
            { label: "Memory", value: "36GB RAM" },
        ]
    };

    // related products descryption
    const relatedProducts = [
        { id: 101, img: related1, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00" },
        { id: 102, img: related2, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00" },
        { id: 103, img: related1, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00" },
        { id: 104, img: related2, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00" },
        { id: 105, img: related1, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00" },
        { id: 106, img: related2, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00" },
    ];

    const breadcrumbs = [
        { name: "Home", path: "/" },
        { name: "Clothings", path: "/products" },
        { name: "Men's wear", path: "/products" },
        { name: "Summer clothing", path: "/products" },
    ];

    return (
        <div className="container mx-auto px-4 py-6">
            
            {/* breadcrumbs  Navigation */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={crumb.name}>
                        <button 
                            onClick={() => navigate(crumb.path)} 
                            className={`hover:text-blue-600 ${index === breadcrumbs.length - 1 ? 'text-gray-400 cursor-default' : 'hover:underline'}`}
                            disabled={index === breadcrumbs.length - 1}
                        >
                            {crumb.name}
                        </button>
                        {index < breadcrumbs.length - 1 && <span>›</span>}
                    </React.Fragment>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Product Image Gallery */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-100 p-8 rounded-lg mb-4 flex justify-center">
                            <img src={shirtImage} alt={product.name} className="max-h-96 object-contain" />
                        </div>
                        <div className="flex gap-2 justify-center">
                            {/* Small thumbnails */}
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-16 h-16 bg-gray-100 border-2 border-transparent hover:border-blue-500 rounded flex items-center justify-center cursor-pointer">
                                    <img src={shirtImage} alt={`Thumb ${i}`} className="w-full h-full object-contain p-1 opacity-70" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*  Details and  Pricing */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 text-sm font-medium text-green-600 mb-2">
                            <span className="bg-green-100 px-2 py-0.5 rounded-full text-xs">✓ In stock</span>
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h1>
                        
                        {/* Ratings and Stats */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 border-b pb-4">
                            <span className="text-orange-400 flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'} size={14} />
                                ))}
                            </span>
                            <span>{product.reviews} reviews</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>{product.orders} sold</span>
                            <button className="text-blue-600 hover:underline">View details</button>
                        </div>
                        
                        {/* Price Range Table */}
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4 flex justify-between text-center font-medium">
                            {/* Price Group 1 */}
                            <div className="flex-1 border-r border-orange-200">
                                <p className="text-lg text-orange-600">${product.price.toFixed(2)}</p>
                                <p className="text-xs text-gray-500">50-100 pcs</p>
                            </div>
                            {/* Price Group 2 */}
                            <div className="flex-1 border-r border-orange-200">
                                <p className="text-lg text-gray-700">${(product.price * 0.9).toFixed(2)}</p>
                                <p className="text-xs text-gray-500">100-700 pcs</p>
                            </div>
                            {/* Price Group 3 */}
                            <div className="flex-1">
                                <p className="text-lg text-gray-700">${(product.price * 0.8).toFixed(2)}</p>
                                <p className="text-xs text-gray-500">700+ pcs</p>
                            </div>
                        </div>

                        {/* Specifications */}
                        <div className="space-y-2 text-sm text-gray-600">
                            <p><strong>Price:</strong> Negotiable</p>
                            <p><strong>Type:</strong> Classic shoes</p>
                            <p><strong>Material:</strong> Plastic, rubber</p>
                            <p><strong>Color:</strong> Customization</p>
                            <p><strong>Customization:</strong> Customized logo and design custom packages</p>
                            <p><strong>Protection:</strong> Refund/replacement</p>
                            <p><strong>Warranty:</strong> 2 years full warranty</p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 mt-6">
                            <input 
                                type="number" 
                                defaultValue="1" 
                                min="1"
                                className="w-20 border border-gray-300 rounded px-3 py-2 text-center" 
                            />
                            <button className="flex-1 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
                                <FaShoppingCart /> Add to cart
                            </button>
                            <button className="border border-blue-600 text-blue-600 p-3 rounded-lg hover:bg-blue-50 transition">
                                <FaHeart />
                            </button>
                        </div>
                    </div>

                    {/* Seller Info */}
                    <div className="lg:col-span-1 border-l border-gray-200 pl-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3 flex items-center justify-center text-white text-xl font-bold">R</div>
                                <div>
                                    <p className="font-semibold text-gray-900">Supplier</p>
                                    <p className="text-sm text-gray-600">Riford Tradeing LLC</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1 mb-4">
                                <p>📍 Pakistan , Lahore </p>
                                <p className="text-green-600 flex items-center"><FaCheck size={12} className="mr-1"/> Verified Seller</p>
                                <p>🌎 Worldwide shipping</p>
                            </div>
                            <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg mb-2 hover:bg-blue-700 transition">
                                Send inquiry
                            </button>
                            <button className="w-full border border-gray-300 text-blue-600 font-medium py-2 rounded-lg hover:bg-gray-100 transition">
                                Seller's profile
                            </button>
                            <div className="flex justify-center gap-4 mt-3 text-sm">
                                <button className="text-gray-500 hover:text-blue-600 flex items-center gap-1">
                                    <FaHeart size={12}/> Save for later
                                </button>
                                <button className="text-gray-500 hover:text-blue-600 flex items-center gap-1">
                                    <IoShareSocialSharp size={12}/> Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Tabs and Related Products */}
                <div className="mt-8 border-t pt-6">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-200 mb-6">
                        {['Description', 'Reviews', 'Shipping', 'About seller'].map((tab, index) => (
                            <button 
                                key={tab}
                                className={`px-4 py-2 text-sm font-medium ${index === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Description Content */}
                    <div>
                        <p className="text-gray-700 mb-6 leading-relaxed text-sm">{product.description}</p>
                        
                        <div className="grid grid-cols-2 gap-6 text-sm">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Technical Specifications</h3>
                                {product.details.map(item => (
                                    <div key={item.label} className="flex border-b py-1.5">
                                        <span className="w-1/3 text-gray-500">{item.label}</span>
                                        <span className="w-2/3 text-gray-800">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Key Features</h3>
                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                    <li>Some great feature name here</li>
                                    <li>Features here</li>
                                    <li>Some great feature name here</li>
                                    <li>Features here</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Related products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {relatedProducts.map(rel => (
                        <div key={rel.id} className="bg-white border border-gray-200 rounded-lg p-3 text-center cursor-pointer hover:shadow-md transition">
                            <div className="h-24 flex items-center justify-center mb-2">
                                <img src={rel.img} alt={rel.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                            </div>
                            <p className="text-sm font-medium text-gray-800 truncate">{rel.name}</p>
                            <p className="text-xs text-gray-500 mt-1">{rel.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Banner */}
            <div className="bg-blue-600 rounded-lg p-6 flex justify-between items-center">
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

export default DetailPage;