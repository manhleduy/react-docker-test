import { api } from "./axios.ts";
export const getMethod= async(setError:any , setLoading: any, setResponse: any)=>{
    try{
        setLoading(true);
        const res=await  api.get("/user");
        setResponse(res.data);
    }catch(e:any){
        console.log(e);
        if(e.response && e.response!=='undefined'){
            setError(e.response.data)
        }
    }finally{
        setError(null);
        setLoading(false);
    }
}
export const createMethod=async (setError:any, setLoading:any, setResponse:any, data:any)=>{
    try{    
        setLoading(true);
        const res= await api.post("/user", data);
        setResponse(res.data);
    }catch(e:any){
        console.log(e);
        if(e.response && e.response!=='undefined'){
            setError(e.response.data)
        }

    }finally{
        setError(null);
        setLoading(false);
    }
}

export const deleteMethod=async (setError:any, setLoading:any, setResponse:any, id:number)=>{
    try{    
        setLoading(true);
        const res=await api.delete(`/user/${id}`);
        setResponse(res.data);
    }catch(e:any){
        console.log(e);
        if(e.response && e.response!=='undefined'){
            setError(e.response.data)
        }
    }finally{
        setError(null);
        setLoading(false);
    }
}
