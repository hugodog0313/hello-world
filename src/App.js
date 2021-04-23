import React, { useEffect, useState } from 'react';
import RedSwitch from './component/redSwitch.js';
import BlueSwitch from './component/blueSwitch.js';
import Menu from './component/menu.js';
import Context from './component/context.js';
import ContextTwo from './component/contextTwo.js';
import ContextThree from './component/contextThree.js';
import FloatingButton from './component/sizeButtom.js';
import Title from './component/title.js'
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
        <Title />
        <div>
          <FloatingButton />
        </div>
        <nav id="nav">
          <BlueSwitch />
          <RedSwitch />
        </nav>
        <div className="container">
          <Switch>
            <div id="root">
              {/* <Link></Link> */}
              {/* {click == 0 && <Context />}
              {click == 1 && <Context />}
              {click == 2 && <ContextTwo />}
              {click == 3 && <ContextThree />} */}
              <Route path="/chapter1">
                <Context />
              </Route>
              <Route path="/chapter2">
                <ContextTwo />
              </Route>
              <Route path="/chapter3">
                <ContextThree />
              </Route>
            </div>
          </Switch>
          <div id="foot">
            <Menu aaa={callback} />
          </div>
        </div>
      </div>
    </Router>
  );
}

// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     default:
//       return state
//   }
// }

// const TodoList = ({ todos, onTodoClick }) => (
//   <ul>
//     {todos.map(todo =>
//       <Todo
//         key={todo.id}
//         {...todo}
//         onClick={() => onTodoClick(todo.id)}
//       />
//     )}
//   </ul>
// )
export default App;

