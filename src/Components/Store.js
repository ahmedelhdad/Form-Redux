import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
const store =configureStore({
    reducer:{
        names:CounterSlice
    }
})

export default store