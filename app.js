const express=require('express');
const app=express();
const parser=require('body-parser');
app.use(parser.urlencoded({extended:false}));

const userroutes=require('./Routes/user');
const user = require('./Models/userdata');

const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(userroutes);


user.sync().then(res=>{
    app.listen(3000,()=>{
        console.log('Server is listening at port 3000');
    });
})
.catch(err=>{
    console.log(err);
})




