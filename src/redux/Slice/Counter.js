import { createSlice } from "@reduxjs/toolkit";
import { dummyThunk } from "../Thunks/Thunks";

/**
 * @property {string} loading - api call status called in thubk
 * @property {array} data     - loading data in the data variable return from thunk 
 * @property {number} value   - value of the counter 
 */
const initialState = {
  loading: "idle",
  data: [],
  value: 0,
};

/**
 * @property {string} name  - Name of the Slice
 * @property {object} initialState  - loading the slice with the its format
 * @property  {object}  reducers    - A mapping from action types to action-type-specific case reducer functions. 
 * 
 */
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  /**
   * extrareducer is used when we are passing any thunk in dispatch action
   * @param {any} builder 
   */
  extraReducers: (builder) => {
    //this case when thunk is in pending state
    builder
      .addCase(dummyThunk.pending, (state, action) => {
        state.loading = 'pending'
      })
    //this case when thunk is in fullfilled state
      .addCase(dummyThunk.fulfilled, (state, action) => {
        state.loading = 'fulfilled'
        state.data.push(action.payload)
      })
    //this case when thunk is in rejected state
      .addCase(dummyThunk.rejected, (state, action) => {
        state.loading = 'rejected'
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
