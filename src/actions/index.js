const Actions = {
  setSelectedItem: (payload) => {
    return (dispatch) => {
      dispatch({
        type: "SET_SELECTED_ITEM",
        payload,
      });
    };
  },
  setCustomerInfo: (payload) => {
    return (dispatch) => {
      dispatch({
        type: "SET_CUSTOMER_INFO",
        payload,
      });
    };
  },
};

export default Actions;
