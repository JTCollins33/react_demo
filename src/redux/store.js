import {configureStore} from '@reduxjs/toolkit';

const initialState = {
    name: "Tim",
    age: 3
};

export const userReducer = (state=initialState, action) => {
    switch (action.type){
        case "CHANGE_AGE":
            return {...state, age: Math.random()*10};
        case "CHANGE_NAME":
            return {...state, name: (Math.random()+1).toString(36).substring(7)};
        default:
            return state;
    }
}

export const reduxStore = configureStore({reducer: userReducer});