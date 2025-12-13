import { api } from "./axios.ts";

export const createMethod=async (data:any)=>{
    try{    
        const res= await api.post("/user", data);
        return res.data.message;
    }catch(e:any){
        console.log(e);
        return e.response.message

    }
}
export const deleteMethod=async (id:number)=>{
    try{    
        const res=await api.delete(`/user/${id}`);
        return res.data.message;
    }catch(e:any){
        console.log(e);
        return e.response.message
    }
}

export interface User{
  id:number,
  name:string,
  phonenumber:string,
  email:string
}