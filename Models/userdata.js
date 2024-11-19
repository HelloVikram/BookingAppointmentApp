const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const { type } = require('os');


const user=sequelize.define('user',{
    id:{
    type:Sequelize.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phone:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING,
        unique:true
    }
})

module.exports=user;