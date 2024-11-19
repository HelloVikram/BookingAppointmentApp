const express=require('express');
const router=express.Router();

const userController=require('../controller/user');

router.post('/user/add-user',userController.postData);

router.get('/user/get-user',userController.getData);

router.delete('/user/delete-user/:id',userController.deleteData);

module.exports=router;