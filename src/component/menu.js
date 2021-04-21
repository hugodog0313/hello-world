import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

function Menu(props) {

    const callback = props.aaa;
    const [chapter, setChapter] = useState(0);

    useEffect(
        () => {
            console.log("Menu effect");
            callback(chapter);
        }
    );

    const chapter1 = () => {
        setChapter(1);
        console.log("click1");
        console.log(chapter);
    }


    const chapter2 = () => {
        setChapter(2);
        console.log("click2");
    }

    const chapter3 = () => {
        setChapter(3);
        console.log("click3");
    }

    return (
        <div>
            <Link to="/chapter1">
                {/* <h1 onClick={chapter1}>chapter1</h1> */}
                <h1>chapter1</h1>
            </Link>
            <Link to="/chapter2">
                {/* <h1 onClick={chapter2}>chapter2</h1> */}
                <h1>chapter2</h1>
            </Link>
            <Link to="/chapter3">
                {/* <h1 onClick={chapter3}>chapter3</h1> */}
                <h1>chapter3</h1>
            </Link>
        </div>
    );
}
export default Menu;