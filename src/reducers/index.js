import DummyData from "../shared/data.json";

const mainReducerDefaultState = {
  itemList: DummyData.data.locations,
  itemDescription: {},
  customerInfo: {},
};

export default (state = mainReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_ITEM_LIST":
      return {
        ...state,
        itemList: action.payload,
      };
    case "SET_SELECTED_ITEM":
      return {
        ...state,
        itemDescription: action.payload,
      };
    case "SET_CUSTOMER_INFO":
      return {
        ...state,
        customerInfo: action.payload,
      };
    default:
      return state;
  }
};
