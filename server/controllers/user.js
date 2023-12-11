import User from "../models/user.js";

  export const createUser=  async(req,res)=>{
    const newUser= new User(req.body)

  try{
const savedUser= await newUser.save();
res.status(200).json(savedUser);
  }
  catch(error){
   res.status(500).json(error);
  }
}


 export const updateUser=async(req,res)=>{
    const updateUser= await User.findByIdAndUpdate(req.params.id,{$set:req.body} ,{new:true});

  try{

res.status(200).json(updateUser);
  }
  catch(error){
   res.status(500).json(error);
  }
}

 export const deleteUser=async(req,res)=>{
    const deleteUser= await User.findByIdAndDelete(req.params.id);

  try{

res.status(200).json(deleteHotel);
  }
  catch(error){
   res.status(500).json(error);
  }
}

export const getUser=async(req,res)=>{
    const oneUser= await User.findById(req.params.id);

  try{

res.status(200).json(oneHotel);
  }
  catch(error){
   res.status(500).json(error);
  }
}

   export  const getallUser= async(req,res)=>{

    const getallUser= await User.find();
const errorStatus=Error.status;
const errorMessage=Error.message;

  try{

res.status(200).json( getallUser);
  }
  catch(error){
   res.status(errorStatus).json(errorMessage);
  }
}