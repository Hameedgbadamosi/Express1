const express = require("express");

const router = express.Router();

//Define routes
router.get("/user",(req,res)=>{
    res.send("Ayodeji");
})
router.get("/food",(req,res)=>{
    res.send("rice");
});

module.exports =router;

