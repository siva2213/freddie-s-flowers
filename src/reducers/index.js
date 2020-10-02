import DummyData from "../shared/data.json";

const mainReducerDefaultState = {
  rmsData: DummyData.data.locations,
  categories: [],
  subCategories: {},
};

export default (state = mainReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_SELECTED_CATEGORY":
      return {
        ...state,
        categories: action.payload,
      };
    case "SET_SELECTED_SUB_CATEGORY":
      return {
        ...state,
        subCategories: action.payload,
      };
    default:
      return state;
  }
};
