import express from 'express'
import { connection } from './config/db.js';
import cors from 'cors'
import dotenv from "dotenv"
const app = express()
const port = 8083;
dotenv.config()
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}))

app.get('/api/user',async(req, res) => {
  try{
    const [response]= await connection.query("SELECT * FROM users");
    if(response.length===0) return res.status(404).json({message: "can not find any user"})
    res.status(200).json({
      users:response,
      message: "get user data successfully"
    });


  }catch(e){
    console.log(e);
    res.status(500).json({message: "server error get"});
  }
})
app.post('/api/user',async (req, res)=>{
  try{
    const {name, phonenumber, email}= req.body;
    if(!name || !phonenumber || !email){
      return res.status(400).json({message: "missing required user information"});
    }
    const response =await connection.query(
      `INSERT INTO users (name, phonenumber, email) VALUES (?,?,?)`,
      [name, phonenumber, email]
    );
    console.log(response)
    res.status(201).json({message: "user created successfully"});
  }catch(e){
    console.log(e);
    res.status(500).json({message: "server error"})
  }
})
app.delete('/api/user/:id',async (req, res)=>{
   try{
    const id= req.params.id;
    if(!id){
      return res.status(400).json({message: "user id is not defined"});
    }
    const response= connection.query(`DELETE FROM users WHERE id=?`, id);
    res.status(200).json({message: "delete successfully"});
  }catch{
    console.log(e);
    res.status(500).json({message: "server error"})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
