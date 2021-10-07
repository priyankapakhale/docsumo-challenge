const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER":
      return {
        user: { ...payload },
      };
    default:
      return state;
  }
};

export default reducer;
