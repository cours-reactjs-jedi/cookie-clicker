import { createSlice, configureStore } from "@reduxjs/toolkit";

const nbrSlice = createSlice({
  name: "nbr",
  initialState: {
    nbr: 0,
    multiplicateur: 1,
    extra: 1,
    autoClickRate: 0,
    displayExtra: false,
  },
  reducers: {
    incremented: (state) => {
      state.nbr += 1 * state.multiplicateur * state.extra;
    },
    buy: (state, action) => {
      const { price, multiplicateur, autoClickRate } = action.payload;
      if (state.nbr >= price) {
        state.multiplicateur = multiplicateur
          ? state.multiplicateur * multiplicateur
          : state.multiplicateur;
        state.autoClickRate = autoClickRate
          ? state.autoClickRate + autoClickRate
          : state.autoClickRate;
        state.nbr -= price;
      }
    },
    extra: (state, action) => {
      const { extra } = action.payload;
      state.extra = extra;
      state.displayExtra = false;
      // setTimeout(() => {
      //   state.extra = 1;
      // }, 3000);
    },
    autoClick: (state) => {
      state.nbr += state.autoClickRate;
    },
    displayExtra: (state) => {
      const rand = Math.floor(Math.random() * 5);
      if (rand === 0) {
        state.displayExtra = true;
      }
    },
  },
});

export const {extra, incremented, buy, autoClick, displayExtra } = nbrSlice.actions;

export const store = configureStore({
  reducer: nbrSlice.reducer,
});
