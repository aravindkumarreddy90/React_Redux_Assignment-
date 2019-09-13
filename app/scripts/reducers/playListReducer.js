const initialState = {
  mylist: [],
  recommendations: []
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_LIST":
      return action.payload;
    case "REMOVE_ITEM_LIST":
      const finalList = state.mylist.filter(function(item) {
        return item.id !== action.payload.id;
      });
      state.recommendations.push(action.payload);
      return Object.assign({}, state, { mylist: finalList });
    case "ADD_ITEM_LIST":
      state.mylist.push(action.payload);
      const recList = state.recommendations.filter(function(item) {
        return item.id !== action.payload.id;
      });
      return Object.assign({}, state, { recommendations: recList });
    default:
      return state;
  }
}
