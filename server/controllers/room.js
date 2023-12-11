import Room from "../models/room.js";
import Hotel from "../models/hotel.js";

export const createRoom= async( req,res)=>{


const hotelid= req.params.hotelid;
const newRoom= new Room(req.body);

try{

    const savedRoom= await newRoom.save();


    try{
       await Hotel.findByIdAndUpdate(hotelid,{$push:{rooms:savedRoom._id}});
    }
    catch(err){
            next(err);
              }
res.status(200).json(savedRoom);
}
catch(err){
    next(err);
}

};

export const updateRoom=async(req,res)=>{
   
    const updateRoom= await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body} ,{new:true});

  try{

res.status(200).json(updateRoom);
  }
  catch(error){
   res.status(500).json(error);
  }
}

 export const deleteRoom=async(req,res)=>{
    const hotelid= req.params.hotelid;
   

  try{
    const deleteRoom= await Room.findByIdAndDelete(req.params.id);
    try{
        Hotel.findByIdAndUpdate(hotelid,{$pull:{rooms:req.params.id}});
    }catch(err){
        next(err);
    }

res.status(200).json(deleteRoom);
  }
  catch(error){
   res.status(500).json(error);
  }
}

export const getRoom=async(req,res)=>{
    const oneRoom= await Room.findById(req.params.id);

  try{

res.status(200).json(oneRoom);
  }
  catch(error){
   res.status(500).json(error);
  }
}

   export  const getallRoom= async(req,res)=>{

    const getallRoom= await Room.find();
const errorStatus=Error.status;
const errorMessage=Error.message;

  try{

res.status(200).json( getallRoom);
  }
  catch(error){
   res.status(errorStatus).json(errorMessage);
  }
}