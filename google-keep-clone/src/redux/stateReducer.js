import { createStore } from 'redux';
// save all the channels at one place - Application State
let initialState ={
    title: "",
    note: "",
    keeplist: []
}

// function - make the necessary changes - reducer function

function appReducerFunction(state = initialState, action){
    // console.log("Redux state here", state, action);
    let stateCopy = { ...state};
    switch(action.type){
        case "user_title_change":
            stateCopy.title = action.payload;
            return stateCopy;

        case "user_note_change":
            stateCopy.note = action.payload;
            return stateCopy;

        case "add_user_data":
            let user = {};
            user.title = stateCopy.title;
            user.note = stateCopy.note;
            stateCopy.keeplist.push(user);
            console.log("state after adding user", stateCopy);
            return stateCopy;
 
        default:
            return stateCopy;
    }
} 

// Create a pakage - (state, dispatch) - store - there should be a way to create this store - 
// already present in redux

const store = createStore(appReducerFunction);

export default store;