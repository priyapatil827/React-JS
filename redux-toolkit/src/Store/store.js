import {configureStore} from '@reduxjs/toolkit'
import bookreducer from '../Slices/Slices'

const store = configureStore({
    reducer:{
        book:bookreducer,
    }
});
export default store;