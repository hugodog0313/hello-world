import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { setColor } from '../action/action';

function Menu(props) {

    const callback = props.aaa;
    const [chapter, setChapter] = useState(0);

    useEffect(
        () => {
            console.log("Menu effect");
            callback(chapter);
        }/*, []*/
    );
    const chapter1 = () => {
        setChapter(1);
        // console.log("click1");
        // console.log(chapter);
    }


    const chapter2 = () => {
        setChapter(2);
        // console.log("click2");
    }

    const chapter3 = () => {
        setChapter(3);
        // console.log("click3");
    }
    // const handleColorButtonClick = (color) => {
    //     let action = setColor(color);
    //     props.dispatch(action);
    //     console.log(action);
    // }

    const handleColorButtonClick = (color) => {
        props.dispatchActionToRedux(color);
        console.log(color);
    }

    return (
        <>
            <div>
                <Link to="/chapter1">
                    <h1 onClick={chapter1}>chapter1</h1>
                    {/* <h1>chapter1</h1> */}
                </Link>
                <Link to="/chapter2">
                    <h1 onClick={chapter2}>chapter2</h1>
                    {/* <h1>chapter2</h1> */}
                </Link>
                <Link to="/chapter3">
                    <h1 onClick={chapter3}>chapter3</h1>
                    {/* <h1>chapter3</h1> */}
                </Link>
            </div>
            <div>
                <Button onClick={() => { handleColorButtonClick("Yellow") }}>Yellow</Button>
                <Button onClick={() => { handleColorButtonClick("Green") }}>Green</Button>
                <Button onClick={() => { handleColorButtonClick("Red") }}>Red</Button>
            </div>
        </>
    );
}
function mapStateToProps(state) {
    return {

    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         dispatch: function (action) {
//             dispatch(action);
//         }
//     }
// }

function mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps");
    return {
        dispatchActionToRedux: (color) => {
            console.log("color");
            // let contentAction = addContent(contentText);
            let colorAction = setColor(color);
            dispatch(colorAction);
            // dispatch(colorAction);
        }
    }
}
// const Button = connect(mapStateToProps, { setColor })(Menu)

export default connect(mapStateToProps, mapDispatchToProps)(Menu);