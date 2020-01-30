//useState : It holds the info that we are getting from the api
//useEffect : It basically runs the fetch call when our component mounts
import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop(){

    useEffect(() => {
       fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const x = await data.json();
        console.log(x);
        setItems(x);
    };
    

    return(
        <div>
            {items.map(item => (
            <h1 key={item.id}>
                <Link to={`/shop/${item.id}`}>{item.name}</Link>
                <br/>
            </h1>
            ))}
        </div>
    )
}
export default Shop;