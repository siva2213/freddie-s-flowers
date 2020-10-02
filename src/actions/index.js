const Actions = {
  setSelectedCategory: (payload) => {
    return (dispatch) => {
      dispatch({
        type: "SET_SELECTED_CATEGORY",
        payload,
      });
    };
  },
  setSelectedSubCategory: (payload) => {
    return (dispatch) => {
      dispatch({
        type: "SET_SELECTED_SUB_CATEGORY",
        payload,
      });
    };
  },
};

export default Actions;
