//useState : It holds the info that we are getting from the api
//useEffect : It basically runs the fetch call when our component mounts
import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function ItemDetail({match}){

    useEffect(() => {
        fetchItem();
        console.log(match);
    },[]);

    const [item, setItem] = useState({});

    const fetchItem = async () =>{
        const fetchItem = await fetch('https://jsonplaceholder.typicode.com/users');
        const item = await fetchItem.json();
    }

    return(
        <div>
            <h1>Item</h1>
        </div>
    )
}
export default ItemDetail;