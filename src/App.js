import React, { useEffect, useState } from 'react';
import RedSwitch from './component/redSwitch.js';
import BlueSwitch from './component/blueSwitch.js';
import Menu from './component/menu.js';
import Context from './component/context.js';
import ContextTwo from './component/contextTwo.js';
import ContextThree from './component/contextThree.js';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
function App() {

  const [click, setclick] = useState(0);
  const callback = (x) => {
    setclick(x);
  }
  // useEffect(console.log(click));
  useEffect(() => {
    console.log(click);
  });

  return (
    <Router>
      <div>
        <nav id="nav">
          <BlueSwitch />
          <RedSwitch />
        </nav>
        <div class="container">
          <div id="root">
            {/* <Link></Link> */}
            {click == 0 && <Context />}
            {click == 1 && <Context />}
            {click == 2 && <ContextTwo />}
            {click == 3 && <ContextThree />}
          </div>
          <div id="foot">
            <Menu aaa={callback} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

