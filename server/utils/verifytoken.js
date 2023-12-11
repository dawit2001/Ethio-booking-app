import { createError } from "./error.js";
import jwt from "jsonwebtoken";
 export const verifytoken= (req,res,next)=>{
  const token=req.cookies.tokens;


  if(!token)return next(createError(404,"no token"));
  
  jwt.verify(token,"asdsdxhyfcjyfcjgcfcj",(err,userz)=>{

    if(err)
    return next(createError(404,"invalid token"));
    
    req.user=userz;
    next();
  });
  
 };

 export const verifyuser= (req,res,next)=>{
   verifytoken(req,res, ()=>{
    if(req.user.id===req.params.id|| req.user.isAdmin)
    {
        next()
    }
    else return next(createError(403,"not authorise"));


   });
  
  
  
   }
   export const verifyadmin= (req,res,next)=>{
    verifytoken(req,res,next,()=>{
     if( req.user.isAdmin)
     {
         next()
     }
     else return next(createError(403,"not authorise"));
 
 
    });
   
   
   
    }