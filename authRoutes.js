const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const router = express.Router();
const User = mongoose.model('User');



router.post('/signup',async (req,res)=>{
   
    const {email,password} = req.body;

    try{
      const user = new User({email,password});
      await  user.save();//create user yapıyor
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token}  )
    }catch(err){
      return res.status(422).send({error :"must provide email or password"})
    }
    
    
})



module.exports = router
 
