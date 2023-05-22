import { createSlice } from "@reduxjs/toolkit";
import { OFFSSET_LIVE_CHAT } from "./constants";

const chatSlice=createSlice(
    {
        name:'chat',
        initialState: {
            messages:[],
        },
        reducers:{
            addMessage:(state,action)=>{
                state.messages.splice(OFFSSET_LIVE_CHAT,1);
                state.messages.unshift(action.payload);
            }
        }

    }
)

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;
