import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: {
        user : null,
        errorFlag: false,
        errorMsg: null,
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
        login_false : (state,action) => {
            state.errorFlag = true;
            state.fetchingFlag = false;
            state.errorMsg = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
        
    }
});

export const { login_begin,login_true,login_false,logout} = userSlice.actions;
export default userSlice.reducer;