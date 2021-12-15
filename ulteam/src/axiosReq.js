import axios from "axios";

const URL = "http://localhost:5000/api" ;
const TKN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTI5ZTFmM2YxODZmYTM0YzA0OGEzOCIsImFkbWluIjp0cnVlLCJpYXQiOjE2Mzg2Njk5MTMsImV4cCI6MTYzODc1NjMxM30.bdhXL2am_bDXKTFd3LSIYcqc-s743FsxJA6vye21nQQ" 

export const reqPublic = axios.create({
    baseURL : URL,
});

export const reqPrivate = axios.create({
    server_URL : URL,
    header : {token: `Bearer ${TKN} `}
})