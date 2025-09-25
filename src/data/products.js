// src/data/products.js
import bagpack from '../assets/pngs/bagpack.png';
import shirt from '../assets/pngs/shirt.png';
import ring from '../assets/pngs/ring.png';
import tv from '../assets/pngs/tv.png';
import earbuds from '../assets/pngs/earbudspng.png';
import sneakers from '../assets/pngs/sneakers.png';
import handbag from '../assets/pngs/handbag.png';
import watch from '../assets/pngs/watch.png';
import iphone from '../assets/pngs/iphone.png';

const products = [
  { id: 1, name: "35L Backpack", price: 999, category: "Bags", rating: 2.9, image: bagpack },
  { id: 2, name: "Mens Casual Shirt", price: 699, category: "Men's Clothing", rating: 4.3, image: shirt },
  { id: 3, name: "Silver Dragon Ring", price: 1299, category: "Jewellery", rating: 4.6, image: ring },
  { id: 4, name: "Samsung Android TV", price: 5499, category: "Electronics", rating: 4.4, image: tv },
  { id: 5, name: "Bluetooth Earbuds", price: 999, category: "Electronics", rating: 4.3, image: earbuds },
  { id: 6, name: "Men's Sneakers", price: 2199, category: "Men's Clothing", rating: 4.2, image: sneakers },
  { id: 7, name: "Women's Handbag", price: 1899, category: "Bags", rating: 4.0, image: handbag },
  { id: 8, name: "Analog Wrist Watch", price: 1999, category: "Jewellery", rating: 3.6, image: watch },
  { id: 9, name: "iPhone 16 Pro Max", price: 133599, category: "Electronics", rating: 3.6, image: iphone },
  { 
    id: 10, 
    name: "Washing Machine", 
    price: 21999, 
    category: "Electronics", 
    rating: 3.6, 
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/ww90dg6u24astl/gallery/in-ww6000d-529739-529739-ww90dg6u24astl-544511169?$684_547_PNG$" 
  }
];

export default products; // ✅ This line is required
