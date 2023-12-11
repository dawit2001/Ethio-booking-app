import Hotel from "../models/hotel.js";

  export const createHotel=  async(req,res)=>{
    const newHotel= new Hotel(req.body)

  try{
const savedHotel= await newHotel.save();
res.status(200).json(savedHotel);
  }
  catch(error){
   res.status(500).json(error);
  }
}


 export const updateHotel=async(req,res)=>{
    const updateHotel= await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body} ,{new:true});

  try{

res.status(200).json(updateHotel);
  }
  catch(error){
   res.status(500).json(error);
  }
}

 export const deleteHotel=async(req,res)=>{
    const deleteHotel= await Hotel.findByIdAndDelete(req.params.id);

  try{

res.status(200).json(deleteHotel);
  }
  catch(error){
   res.status(500).json(error);
  }
}

export const getHotel=async(req,res)=>{
    const oneHotel= await Hotel.findById(req.params.id);

  try{

res.status(200).json(oneHotel);
  }
  catch(error){
   res.status(500).json(error);
  }
}

   export  const getallHotel= async(req,res)=>{

    const getallHotel= await Hotel.find();
const errorStatus=Error.status;
const errorMessage=Error.message;

  try{

res.status(200).json( getallHotel);
  }
  catch(error){
   res.status(errorStatus).json(errorMessage);
  }
}