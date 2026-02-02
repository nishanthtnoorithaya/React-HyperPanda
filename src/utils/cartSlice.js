import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        item:[],
    }, 
    reducers:{
        addItems: (state,action) =>{
            // Vanilla Redux Immutatble State (Immer behind the Scence Convert to this) 
            // const newState = [state];
            // newState.item.push(action.payload);
            // return newState; 
            // Now New Redux Toolkit State is Mutable, We can directly Modify the State.  
            state.item.push(action.payload); 
        }, 
        removeItems:(state) =>{
            state.item.pop(); 
        },
        clearItems: ()=>{
            // state.item.length = 0; 
            return {item: []}  //Return the Empty Item List 
            // return [] this will make your Whole Cart State empty cause an Error. 
        }
    },
})

export const {addItems,removeItems,clearItems} = cartSlice.actions;

export default cartSlice.reducer; 