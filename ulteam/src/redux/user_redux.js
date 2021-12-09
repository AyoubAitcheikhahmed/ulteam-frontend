import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: {
        user : null,
        errorFlag: false,
        fetchingFlag : false,
    },
    reducers: {
        login_begin : (state) => {
            state.fetchingFlag = true
        },
        login_true : (state,action) => {
            state.errorFlag = false;
            state.fetchingFlag = false;
            state.user = action.payload;
        },
        login_false : (state) => {
            state.errorFlag = true;
            state.fetchingFlag = false;
        },
        
    }
});

export const { login_begin,login_true,login_false} = userSlice.actions;
export default userSlice.reducer;