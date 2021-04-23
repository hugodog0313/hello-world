import { combineReducer } from 'redux'
import { Colors } from '../action/action'
import { Content } from '../action/action'
import { SET_COLOR, ADD_CONTENT } from '../action/action'
import { combineReducers } from 'redux'
const initialState = {
    color: Colors.YELLOW,
    contents: Content.YELLOW
}

function colorEditer(colorEditer = "Default Color", action) {
    switch (action.type) {
        case SET_COLOR:
            console.log("reducerClicked");
            return action.color;
        default:
            return colorEditer;
    }
}
function contents(contents = Content.SMALL, action) {
    switch (action.type) {
        case ADD_CONTENT:
            return action.text

        default:
            return contents;
    }
}
// export default function colorApp(state = {}, action) {
//     return {
//         colorEditer: colorEditer(state.colorEditer, action),
//         contents: contents(state.contents, action)
//     }
// }

const colorApp = combineReducers({
    colorEditer,
    contents
})
export default colorApp




