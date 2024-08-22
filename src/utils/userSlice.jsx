import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        createUser:(state,action)=>{
            return action.payload;
        },
        deleteUser:(state,action)=>{
            return null;
        },
    },
});

export const { createUser,deleteUser }=userSlice.actions;
export default userSlice.reducer;