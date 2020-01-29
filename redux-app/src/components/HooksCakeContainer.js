import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    //component variable numOfCakes will now store the value of state.numOfCakes
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button onClick = {() => dispatch(buyCake())}> Buy Cake</button>
            
        </div>
    )
}

export default HooksCakeContainer