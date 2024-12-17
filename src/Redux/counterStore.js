import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice'

const counterStore=configureStore({
    reducer:{

        counterReduce:counterSlice

    }
})

export default counterStore