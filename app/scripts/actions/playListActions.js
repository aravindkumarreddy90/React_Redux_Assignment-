import axios from "axios";

export function getAllList() {
  return function (dispatch) {
    axios.get('http://localhost:3035/products')
    .then((response) =>  {
      dispatch({ type: 'ALL_LIST', payload: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })   
  };
}
export function removeItemFromMyList(id) {
  return function (dispatch) { 
    dispatch({ type: 'REMOVE_ITEM_LIST', payload: id });
  };
}
export function addItemToMyList(item) {
  return function (dispatch) { 
    dispatch({ type: 'ADD_ITEM_LIST', payload: item });
  };
}