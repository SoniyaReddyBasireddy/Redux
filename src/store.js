import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./RootReducer";

function logger({ getState }) {
    return (next) => (action) => {
        if (process.env.NODE_ENV !== "production") {
            console.log("%c PREV STATE:", "color: red", getState());
            console.log("%c ACTION DISPATCHED:", "color: blue", action);
            next(action);
            console.log("%c NEXT STATE:", "color: green", getState());
        }
    };
}

export default createStore(rootReducer, applyMiddleware(thunk, logger));