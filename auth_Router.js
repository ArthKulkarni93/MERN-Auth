const express = require('express');
const { user_Table } = require('../user');
const { login_Midleware, signup_Midleware, gen_jwt } = require('../middlewares');
const router = express.Router();

router.post('/login',login_Midleware,async (req,res)=>{
    try {  
        const {email,password} = req.body;
        const exists = await user_Table.findOne({email})
        if(!exists || exists.password!==password ) {
                return res.json({
                    msg:"not correct credentials or user does not exist",
                    success:"false"
                })
        }

        const token = gen_jwt(email , exists._id)
        return res.json({
            msg:"logged in successfully",
            email,
            password,
            token,
            username:exists.username,
            success:"true"
        })
   }
   catch(e){
        return res.json({
            msg:"error in login",
            success:"false"
        })
    }
})

router.post('/signup',signup_Midleware,async (req,res)=>{
    try{
        const { username , email , password } = req.body
        const exists = await user_Table.findOne({email})
        if(exists) {
            return res.json({
                msg:"user already exists , try loging in",
                success:"false"
            })
        }
        const new_user = await user_Table.create({
            username,
            email,
            password
        })
        return res.json({
            msg:"user created successfully",
            success:"true",
            username
        })
    }
    catch(e){
        return res.json({
            msg:"e in signup",
            success:"false"
        })
    }

})

module.exports = {
    router
}