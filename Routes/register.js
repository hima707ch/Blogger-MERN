const express = require('express');
const router = express.Router();
const Profile = require('../Models');
const bcrypt = require('bcryptjs')
const {body, validationResult} = require('express-validator');

router.get("", (req,res)=>{
    
})

router.post("",[
    body('email').isEmail()
], async (req,res)=>{

    const { name, email, password, c_password } = req.body;

    if(name =="" || email == "" || password == "" || c_password == ""){        
        return res.json({message : "Plz fill all fields"});
    }
    
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.json({message : "Invalid Email"})
    }

    try {
        const emailExist = await Profile.find({email : email});

        if(emailExist.length >=1){
            return res.json({message : "Email already exists, Try again"});
        }

        if(password != c_password){
            return res.json({message : "Password not match"});
        }
        
        const hash_password = await bcrypt.hash(password,12);

        const user = new Profile({name,email,password : hash_password})
        console.log(user);
        await user.save();
        return res.status(201).json({message : "User register Successfuly"});
    }
    catch(err){
        console.log(err)
    }

});

module.exports = router;
