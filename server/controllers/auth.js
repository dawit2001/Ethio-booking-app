import User from "../models/user.js";
import * as bcrypt  from "bcrypt";
import {createError} from "../utils/error.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
export const register =(req,res,next)=>{

    try{

       const salt=bcrypt.genSaltSync(10);
       const hash=bcrypt.hashSync(req.body.password,salt);

        const newUser= new User(
            {
                username:req.body.username,
                password:hash,
                email:req.body.email
            }
        )
        const saveUser=newUser.save();
        res.status(200).json(saveUser);

    }
    catch(err){

    }
}

export const login =async(req,res,next)=>{

    try{

      
       
        const users =  await User.findOne({username:req.body.username});
    
     if(!users)return next( createError(404,"usernot found"));
     
        
        const ispasswordcorrect= await bcrypt.compare(req.body.password, users.password);
        if(!ispasswordcorrect)return next(createError(400,"password not correct"))


        const {password,isAdmin,...otherdetail}=users._doc
        const token =jwt.sign({id:users._id,isAdmin:users.isAdmin},"asdsdxhyfcjyfcjgcfcj")
    
        res.cookie("tokens",token,{httpOnly:true}).status(200).json({...otherdetail});
        
      
    }
    catch(err){
next(err);
    }
}