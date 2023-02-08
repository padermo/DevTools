import { GET_DOCUMENTS, GET_RESOURCES } from './actions';

const initialState = {
  documents: [],
  resources: [],
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
    default:
      return state
  }
}