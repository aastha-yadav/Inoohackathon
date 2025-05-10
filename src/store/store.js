import { configureStore } from "@reduxjs/toolkit";
import { Auth } from "./Reducer/Auth";

export const store = configureStore({
    reducer:{
        Auth
    }
})