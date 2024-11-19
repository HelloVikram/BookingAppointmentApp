
const user=require('../Models/userdata');

const postData=async (req,res,next)=>{
    try{
    const name=req.body.username;
    const phone=req.body.phone;
    const email=req.body.email;
    console.log(name,phone,email);
    const data= await user.create({username:name,phone:phone,email:email});
    res.status(201).json({userdetails:data});
    }
    catch(err){
        console.log(err);
     res.status(500).json({
        error:err
     })
    }
    
}

const getData=async (req,res,next)=>{
    try{
        console.log('getData...')
        const data=await user.findAll();
        console.log(data.allusers)
        res.status(200).json({allusers:data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            err:err
        })
    }
}

const deleteData=async (req,res,next)=>{
    try{
      if(!req.params.id){
          res.status(400).json({err:'ID IS INVALID'})
      }
      const uid=req.params.id;
    await user.destroy({where:{id:uid}});
    res.sendStatus(200);
    }catch(err){
      console.log(err);
      res.send(400).json({err:err});
    }
  }

  module.exports={postData,getData,deleteData}