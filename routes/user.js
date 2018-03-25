const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const bcrypt = require('bcrypt');

const User = require("../models/employee");

router.post("/signup",(req,res,next)=>{

    User.find({email:req.body.email}).exec().then(user=>{
        if(user.lemgth>=1)
{
    return res.status(409).json({
        message: "Mail Exists"
    });
}
else
    bcrypt.has(req.body.password,10,(err,hash_=>{
        if(err) {
            return res.status(500).json({
                error: err
            });
        else{
            const user = new User({
                firstName:res.body.firstName,
                lastName:res.body.lastName,
                address:res.body.address,
                city:res.body.city,
                gender:res.body.gender,
                dateOfBirth:res.body.dateOfBirth,
                

                email: res.body.email,

            })
        }
            )
        }
    }
});

    const user = new User({
        email:req.body.email,

    })
})