const express=require('express')
const authMiddleware = require("../middlewares/authMiddleware");
const { getAllUsersControllers, getAllDoctorsControllers,changeAccountStatusController } = require('../controllers/adminCtrl');


const router=express.Router()

//get method || users
router.get('/getAllUsers',authMiddleware,getAllUsersControllers)


//get method || doctors
router.get('/getAllDoctors',authMiddleware,getAllDoctorsControllers)

//POST
router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)

module.exports=router

