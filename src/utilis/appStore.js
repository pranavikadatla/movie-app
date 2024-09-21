import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
const appStore=configureStore({
    reducer:{
         user:userSliceReducer,
         movies:moviesReducer,
         gpt:gptReducer,
    },
});
export default appStore;