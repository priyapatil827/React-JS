import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react'

const bookSlice = createSlice({
    name:'book',
    initialState:{
        books:[],
        numberOfBooks:0,
    },
    reducers:{
        addBook:(state,action)=>{
            state.books.push(action.payload);
            state.numberOfBooks++;
        },
        removeBook:(state,action)=>{
            state.books.pop();
            state.numberOfBooks--;
        }
    }
})

export const {addBook,removeBook} = bookSlice.actions;
export default bookSlice.reducer;