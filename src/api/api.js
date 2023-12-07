import axios from "axios"

const API_BASE_URL="https://api.currentsapi.services/v1/"
const API_TOKEN="2LamOnkMtGnEm3-gnO0VXbPftmdpfgNhBZzFYktK6Gphmlc0"



export const getNews=async({page_number=1,page_size=10,category,keywords})=>{
    try{
          const res=await axios.get(`${API_BASE_URL}search`,{
            params:{
                apiKey:API_TOKEN,
                page_number,
                page_size,
                category,
                keywords
            }
          })
          return res.data;
    }catch(err){
         console.log(err)
    }
}

export const getCategories=async()=>{
  try{
        const res=await axios.get(`${API_BASE_URL}available/categories`,{
          params:{
              apiKey:API_TOKEN,
              
          }
        })
        return res.data;
  }catch(err){
       console.log(err)
  }
}