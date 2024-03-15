import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({
    name:'users',
    initialState: userList,
    reducers:{
       addUser:(state,action)=>{
         state.push(action.payload);
       },
       editUser :(state,action)=>{
         const {id,name, email} = action.payload;
         const uu = state.find(user => user.id == id)
         if(uu){
            uu.name = name;
            uu.email = email
         }
       },
       deleteUser:(state,action)=>{
         return state.filter((user)=> user.id !== action.payload);
       }
    }
})

export const {addUser,editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;