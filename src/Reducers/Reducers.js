import {FETCH_USER, SET_USER} from "../Actions/Actions";
import {combineReducers} from "redux";

const userInitialState = {
    value: ''
};

const user = (state = userInitialState, action) => {
    console.log(action.type);
    console.log(state);
    switch(action.type) {
        case SET_USER:
            userInitialState.value = action.value;
            return Object.assign({}, state, {
                // value: state.value + state.diff
                value: {$set: action.value}
            });
        case FETCH_USER:
            return Object.assign({}, state, {

            });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const userApp = combineReducers({
    user : user,
    extra : extra
});

export default userApp;