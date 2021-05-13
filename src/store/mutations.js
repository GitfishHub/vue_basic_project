import * as types from "./types";
export default {
  [types.ISLOGIN]: (state, payload) => {
    if (payload === false) {
      state.islogin = payload;
    } else {
      state.islogin = true;
    }
  },
  [types.TEST]: (state, payload) => {
    state.test = payload;
  }
};
