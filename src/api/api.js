import axios from "axios"

const API_BASE_URL="https://api.currentsapi.services/v1/"
const API_TOKEN="2LamOnkMtGnEm3-gnO0VXbPftmdpfgNhBZzFYktK6Gphmlc0"



export const getNews=async()=>{
    try{
          const res=await axios.get(`${API_BASE_URL}latest-news`,{
            params:{
                apiKey:API_TOKEN
            }
          })
          return res.data;
    }catch(err){
         console.log(err)
    }
}