import React, { useState} from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

const NewIceCreamContainer = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of iceCreams : {props.numOfIceCreams}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick ={() => props.buyIceCream(number)}> Buy {number} IceCreams</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.cake.numOfIceCreams
    }
}

//maps dispatch of an action creator to a prop in our component
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: number => dispatch(buyIceCream(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewIceCreamContainer)
