import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

function Product({ addToCart, searchQuery }) {
  const navigate = useNavigate();
    let objproduct = [
  { image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Pen Graphic T-Shirt", size: "M", price: 999 },
  { image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Classic White Tee", size: "L", price: 799 },
  { image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Black Oversized T-Shirt", size: "XL", price: 1199 },
  { image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Striped Casual Tee", size: "S", price: 899 },
  { image: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Vintage Washed T-Shirt", size: "M", price: 1099 },
  { image: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Floral Print T-Shirt", size: "S", price: 849 },
  { image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Navy Blue Round Neck Tee", size: "L", price: 749 },
  { image: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Tie-Dye Summer T-Shirt", size: "M", price: 1299 },
  { image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Earth Tone Pocket Tee", size: "XL", price: 949 },
  { image: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Abstract Art T-Shirt", size: "S", price: 1149 },
  { image: "https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Red Logo T-Shirt", size: "M", price: 699 },
  { image: "https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Denim Effect Tee", size: "L", price: 1399 },
  { image: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Mountain Print T-Shirt", size: "XL", price: 1049 },
  { image: "https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Pastel Pink T-Shirt", size: "S", price: 799 },
  { image: "https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Urban Street Tee", size: "M", price: 1199 },
  { image: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Green Camo T-Shirt", size: "L", price: 1099 },
  { image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Skull Graphic Tee", size: "XL", price: 949 },
  { image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Plain Grey Melange Tee", size: "S", price: 649 },
  { image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Typography Slogan Tee", size: "M", price: 899 },
  { image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Sunset Gradient T-Shirt", size: "L", price: 1249 },
  { image: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Minimal Logo Tee", size: "XL", price: 799 },
  { image: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Retro Wave T-Shirt", size: "S", price: 1099 },
  { image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Olive Drop Shoulder Tee", size: "M", price: 1349 },
  { image: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Comic Print T-Shirt", size: "L", price: 999 },
  { image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Sports Dry Fit Tee", size: "XL", price: 849 },
  { image: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=400", name: "White V-Neck T-Shirt", size: "S", price: 699 },
  { image: "https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Galaxy Print Tee", size: "M", price: 1199 },
  { image: "https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Animal Print T-Shirt", size: "L", price: 1049 },
  { image: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Half Sleeve Polo Tee", size: "XL", price: 1299 },
  { image: "https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Lavender Crop T-Shirt", size: "S", price: 899 },
  { image: "https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Charcoal Henley Tee", size: "M", price: 1149 },
  { image: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Forest Green Tee", size: "L", price: 799 },
  { image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Mustard Yellow T-Shirt", size: "XL", price: 949 },
  { image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Oversized Cream Tee", size: "S", price: 1099 },
  { image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Rust Brown Pocket Tee", size: "M", price: 849 },
  { image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Sky Blue Summer Tee", size: "L", price: 699 },
  { image: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Dark Maroon T-Shirt", size: "XL", price: 999 },
  { image: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Boho Print T-Shirt", size: "S", price: 1249 },
  { image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Neon Green Graphic Tee", size: "M", price: 1099 },
  { image: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Teal Chest Print Tee", size: "L", price: 899 },
  { image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Coral Slim Fit Tee", size: "XL", price: 749 },
  { image: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Peach Oversized T-Shirt", size: "S", price: 1149 },
  { image: "https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Indigo Washed Tee", size: "M", price: 1399 },
  { image: "https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Brick Red T-Shirt", size: "L", price: 849 },
  { image: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Sage Green Tee", size: "XL", price: 999 },
  { image: "https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Off White Linen Tee", size: "S", price: 1299 },
  { image: "https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Burgundy Longline Tee", size: "M", price: 1049 },
  { image: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Slate Grey T-Shirt", size: "L", price: 799 },
  { image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Cobalt Blue Tee", size: "XL", price: 949 },
  { image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Tangerine Graphic T-Shirt", size: "S", price: 1199 },
];

  const filteredProducts = objproduct.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
  <div className="product-container">
    {filteredProducts.map((item, index) => {
      return (
        <div className="product-card" key={index}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>Size: {item.size}</p>
          <p className="price">₹{item.price}</p>
          <div className="btn-group">
            <button className="cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
            <button className="buy-btn" onClick={() => navigate('/buynow', { state: item })}>Buy Now</button>
          </div>
        </div>
      );
    })}
  </div>
);
}

export default Product;