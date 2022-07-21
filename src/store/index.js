//this commented code used when not used redux toolkit

// import { createStore } from 'redux';

// const reducerFn = (state = { counter: 0 }, action) => {
//   //synchronously function
//   //we should not mutate

//   if (action.type === 'INC') {
//     return { counter: state.counter + 1 };
//   }
//   if (action.type === 'DEC') {
//     return { counter: state.counter - 1 };
//   }

//   if (action.type === 'ADD') {
//     return { counter: state.counter + action.payload };
//   }

//   return state;
// };

// const store = createStore(reducerFn);

// export default store;

//this following code is releatde to using redux toolkit

import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});
export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
