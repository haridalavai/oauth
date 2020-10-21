


import { connectToDatabase } from '../util/mongodb'


const login=async (email,password)=>{
    const { db } = await connectToDatabase();
    const m = db.collection("users").insert({email:email,password:password});


}

export default login;