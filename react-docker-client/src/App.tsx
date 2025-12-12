import { useEffect, useState } from "react";
import type { User } from "./untils/untils";
import { useAppDispatch, useAppSelector } from "./untils/redux/hook";
import { createUser, deleteUser } from "./untils/redux/userSlice";
function App() {
  
  const [newUser, setNewUser]= useState<User>({id:1,name:"", email:"", phonenumber:"" });
  const users= useAppSelector(state=>state.user);
  const dispatch= useAppDispatch();

  const handleNewName:any=(value: string)=>{
    
    setNewUser((prev:any)=>{ return{...prev, name:value }});
  }
  const handleNewPhonenumber: any= (value: string)=>{
    
    setNewUser((prev:any)=>{ return {...prev, phonenumber: value}});
  }
  const handleNewEmail:any=(value:string)=>{
    setNewUser((prev:any)=>{ return {...prev, email: value}})
  }
  return (
    <>
        <form className="flex flex-col items-center text-sm text-slate-800">
            <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">Contact Us</p> 
            <h1 className="text-4xl font-bold py-4 text-center">Let’s Get In Touch.</h1>
            <p className="max-md:text-sm text-gray-500 pb-10 text-center">
                Or just reach out manually to us at <a href="#" className="text-indigo-600 hover:underline">hello@prebuiltui.com</a>
            </p>
            
            <div className="max-w-96 w-full px-4">
                <label htmlFor="name" className="font-medium">Full Name</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#475569"/>
                    </svg>
                    <input 
                    onChange={(e)=>{
                      handleNewName(e.target.value);
                    }}
                    type="text" 
                    className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your full name" required />
                </div>
        
                <label htmlFor="email-address" className="font-medium mt-4">Email Address</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569"/>
                    </svg>
                    <input
                    onChange={(e)=>{
                      handleNewEmail(e.target.value);
                    }}
                    type="email" 
                    className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your email address" required />
                </div>
        
                <label htmlFor="phonenumber" className="font-medium mt-4">Phone number</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569"/>
                    </svg>
                    <input
                    onChange={(e)=>{
                      handleNewPhonenumber(e.target.value);
                    }}
                    type="phonenumber" 
                    className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your phone number" required />
                </div>
                <button
                
                onClick={(e)=>{
                  console.log(newUser);
                  
                  dispatch(createUser(newUser));
                  setNewUser({id:1,name:"", email:"", phonenumber:"" })
                  e.preventDefault()
                }} 
                type="submit" 
                className="cursor-pointer flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition">
                    Submit Form
                    
                </button>
            </div>
        </form>

        {users?.map((item, index)=>(
          <div key={index} className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                    <a href="" target="_blank" rel="noopener noreferrer" className="shrink-0">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="" className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                    </a>
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-1">
                            <a href="" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:underline truncate" >
                                
                            </a>
                        </div>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:underline" >
                          {item.name+ " " + item.phonenumber + " " + item.email}
                        </a>
                    </div>
                    <button 
                    onClick={(e)=>{
                      dispatch(deleteUser(index));
                      e.preventDefault()
                    }}
                    className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-fit p-2 rounded-full transition">
                      delete
                    </button>
                   
              </div>
              
          </div>
        ))}
        
    </>
    );
}


export default App
