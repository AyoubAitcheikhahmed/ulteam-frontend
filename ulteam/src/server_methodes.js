import { login_begin,login_true,login_false } from "./redux/user_redux"
import axios from "axios";
//import { axiosReq } from './axiosReq'

const  BASE_URL = "https://ulteam-api.herokuapp.com/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).user.token;



export const loginProcess = async (dispatch,user) => {
    
    
    try{
        const respone = await axios.post(BASE_URL+"authentification/signin/",user);
        dispatch(login_true(respone.data));

    }catch(err){
        dispatch(login_false());
    }
};

export const adminRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
  });