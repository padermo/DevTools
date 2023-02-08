import { GET_DOCUMENTS, GET_RESOURCES, SET_ALERT } from './actions';

const initialState = {
  documents: [],
  resources: [],
  alert: {}
}

export const reducer = (state = initialState, actions) => {
  switch(actions.type){
    case GET_DOCUMENTS:{
      return{
        ...state,
        documents: actions.payload
      }
    };
    case GET_RESOURCES:{
      return{
        ...state,
        resources: actions.payload
      }
    }
    case SET_ALERT:{
      return{
        ...state,
        alert: actions.payload
      }
    }
    default:
      return state
  }
}