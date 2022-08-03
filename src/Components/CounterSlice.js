import { createSlice } from "@reduxjs/toolkit";


const listSlice = createSlice({
    name:'names',
    initialState:{listname:[
        {id:0,name:'ahmed',age:22,addrees:'Cairo',type:'boy'},
        {id:1,name:'sara',age:15,addrees:'fayoum',type:'girl'}
    ]},
    reducers:{
        sentNames: (state,action) => 
        {
            state.listname = [...state.listname,...action.payload]
        },filter:(state,action) => 
        {
            state.listname = [...action.payload]
        }
    }
})
export const {sentNames,filter} =listSlice.actions
export default listSlice.reducer