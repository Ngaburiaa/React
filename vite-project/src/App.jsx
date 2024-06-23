import { useState } from 'react';
import ListComponent from './components/listComponents';

import LoginForm from './components/utils/login';
 
import './App.css'
import FilterComponent from './components/product/FilterComponent';
import ProductComponent from './components/shoeDesign/ProductComponent';
 
const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
 
const initialProducts = [
  {
    title: "Jordan Proto Lyte",
    collection: "Running Collection",
    description: "Lightweight and breathable, perfect for running.",
    availableColors: ["Red", "Black", "Orange"],
    Categories:"Sneakers",
    price: 245,
    productID: 0,
  },
  {
    title: "Nike Air Zoom Pegasus",
    collection: "Running Collection",
    description: "Designed for comfort and performance.",
    availableColors: ["Blue", "White", "Grey"],
    Categories:"Sneakers",
    price: 180,
    productID: 1,
  },
  {
    title: "Adidas Ultraboost",
    collection: "Running Collection",
    description: "Boost technology for ultimate energy return.",
    availableColors: ["Black", "White", "Green"],
    Categories:"Unisex",
    price: 200,
    productID: 2,
  },
  {
    title: "New Balance Fresh Foam",
    collection: "Running Collection",
    description: "Fresh Foam midsole cushioning for a plush feel.",
    availableColors: ["Red", "Black", "Blue"],
    Categories:"Sneakers",
    price: 150,
    productID: 3,
  },
  {
    title: "Asics Gel-Kayano",
    collection: "Running Collection",
    description: "High-performance running shoes with GEL technology.",
    availableColors: ["Yellow", "Black", "Orange"],
    Categories:"Unisex",
    price: 160,
    productID: 4,
  },
  {
    title: "Puma Ignite",
    collection: "Running Collection",
    description: "Engineered for maximum speed and comfort.",
    availableColors: ["Red", "Grey", "Black"],
    Categories:"Sports",
    price: 130,
    productID: 5,
  },
  {
    title: "Brooks Ghost",
    collection: "Running Collection",
    description: "Smooth transitions and soft cushioning for runners.",
    availableColors: ["Blue", "Black", "White"],
    Categories:"Sports",
    price: 120,
    productID: 6,
  },
  {
    title: "Under Armour HOVR",
    collection: "Running Collection",
    description: "HOVR technology provides a zero-gravity feel.",
    availableColors: ["Green", "Black", "Orange"],
    Categories:"Sports",
    price: 140,
    productID: 7,
  },
  {
    title: "Saucony Kinvara",
    collection: "Running Collection",
    description: "Minimalist design with responsive cushioning.",
    availableColors: ["Red", "Yellow", "Black"],
    Categories:"Sports",
    price: 110,
    productID: 8,
  },
  {
    title: "Mizuno Wave Rider",
    collection: "Running Collection",
    description: "Wave technology for smooth and stable rides.",
    availableColors: ["Black", "White", "Blue"],
    Categories:"Unisex",
    price: 150,
    productID: 9,
  },
];


function App() {
  const [search, setSearch] = useState("");
  const[filtered,setFiltered]=useState([])
  const isCheck=filtered.length!==0? filtered:initialProducts
 
  const [stories] = useState(initialStories);
  const [searchTerm, setSearchTerm] = useState('');
 
  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
 
  return (
    <div>
      <h1>Stories</h1>
 
      {<input
        type="text"
        placeholder="Search stories"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      /> }
      <ListComponent list={filteredStories} />
      <LoginForm  />
       <FilterComponent list={isCheck}
       setSearch={setSearch}
       search={search}
       filtered={filtered}
       setFiltered={setFiltered}/>
       
        < ProductComponent/>
    </div>
  );
}
 
 
export default App