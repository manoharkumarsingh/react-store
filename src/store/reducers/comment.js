import {
    COMMENT_USER
  } from '../actionTypes';
  
  const initialState = {
    users: {},
    commenteduser: {
        _id : '',
        title:'',
        content:'',
        comment :[]
    },
    addedUsers: {},
  }
  export default function(state = initialState, action){
    switch(action.type){
        case COMMENT_USER:
        return {
            ...state,
            commenteduser: action.payload
          };

        default:
            return state; 
    }
}



