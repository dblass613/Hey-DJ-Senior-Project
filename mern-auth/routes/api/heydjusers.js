const express = require("express");
const router = express.Router();
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/HeyDJUser");

router.get('/',(req,res,next) => {
    User.findAll({}).then(users = res.json(users))
        .catch(next)
})

router.get(`/:userId`,(req,res,next) => {

    User.findOne({_id: req.params.userId})
        .then(user => res.json(user))
        .catch(next)

})


module.exports = router;