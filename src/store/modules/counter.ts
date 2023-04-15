import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello zdy'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload;
    }
  }
});

export const { changeMessageAction } = counterSlice.actions;
export default counterSlice.reducer;
