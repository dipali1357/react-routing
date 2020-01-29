import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of iceCreams : {props.numOfIceCreams}</h2>
            <button onClick ={props.buyIceCream}> Buy IceCream</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

//maps dispatch of an action creator to a prop in our component
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)
