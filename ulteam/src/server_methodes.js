import { login_begin,login_true,login_false } from "./redux/user_redux"
import axios from "axios";
//import { axiosReq } from './axiosReq'

const URL = "https://ulteam-api.herokuapp.com/api/";
export const loginProcess = async (dispatch,user) => {
    
    
    try{
        const respone = await axios.post(URL+"authentification/signin/",user);
        dispatch(login_true(respone.data));

    }catch(err){
        dispatch(login_false());
    }
};