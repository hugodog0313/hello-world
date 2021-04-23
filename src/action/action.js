export const SET_COLOR = 'EDIT_COLOR';
export const ADD_CONTENT = 'ADD_CONTENT';

export const Colors = {
    YELLOW: 'YELLOW',
    GREEN: 'GREEN',
    RED: 'RED'
}
export const Content = {
    SMALL: 20
}

// export function setColor(color) {
//     return { type: SET_COLOR, color }
// }
export function addContent(text) {
    return { type: ADD_CONTENT, text }
}

export const setColor = (color) => {
    return { type: SET_COLOR, color }
}
