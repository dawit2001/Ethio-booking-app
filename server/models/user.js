import  mongoose  from "mongoose";


const Userschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
     isAdmin:{
        type:Boolean,
        default:false,
      },
    
    password:{
        type:String,
        required:true
    },
        email:{
            type:String,
            required:true, 
            unique:true
    },
     
},{timestamps:true})

export default mongoose.model( "User",Userschema) ;