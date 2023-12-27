import { configureStore } from "@reduxjs/toolkit";
import productreducer from "./reducer/reducer"

const store = configureStore({
    reducer: {
        product: productreducer,
    }
})

export default store;