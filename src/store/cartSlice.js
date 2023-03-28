const { createSlice } = require("@reduxjs/toolkit");

// define the initial state of the toolkit
// const initialState = [];

// define the state of the toolkit
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // create two functions one for adding to the cart and one for removing from the cart
    // add function will take two paramete
    // first is state and other one is action so we can mutate the state
    // but one thing to keep in mind that do not update the state directly
    // but beccause we are using createSlice we can do that
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
