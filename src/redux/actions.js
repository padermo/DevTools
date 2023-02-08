import {documents, resources} from '../datos/datos.js'

export const GET_DOCUMENTS = 'GET_DOCUMENTS';
export const GET_RESOURCES = 'GET_RESOURCES';
export const SET_ALERT = 'SET_ALERT';

export const getDocuments = () => {
  return async(dispatch) => {
    try {
      dispatch({type: GET_DOCUMENTS, payload: documents})
    } catch (error) {
      console.log(error);
    }
  }
}

export const getResources = () => {
  return async (dispatch) => {
    try {
      dispatch({type: GET_RESOURCES, payload: resources})
    } catch (error) {
      console.log(error);
    }
  }
}

export const setAlert = (state) => {
  return async(dispatch) => {
    try {
      dispatch({type: SET_ALERT, payload: state})
    } catch (error) {
      console.log(error);
    }
  }
}