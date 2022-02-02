import axios from "axios";

const URL = "http://localhost:5000/api" ;
const TKN = () => {
    if(JSON.parse(localStorage.getItem("persist:root")) == null || JSON.parse(localStorage.getItem("persist:root")).user.user == null){
        return "Not_defined";
   }else{
        return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).user.token;
   }

}
export const reqPublic = axios.create({
    baseURL : URL,
});
export const reqPrivate = axios.create({
    server_URL : URL,
    header : {token: `Bearer ${TKN} `}
})