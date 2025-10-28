// // import getPosts, {getPostLength} from "./postController.js";

// // console.log(getPosts());
// // console.log(getPostLength());
// //require
// const express = require(‘express’)
// const path = require(“path”)
// //define a server
// const server = express()
// //banks database
// const  banksDb =[ ]
// //models
// class BankModel {
// constructor({name,location,branch,phone,address,accontNumber}){
//    this.name = name;
//    this.location = location;
//    this.branch = branch;
//    this.phone = phone;
//    this.address = address;
//    this.accontNumber = accontNumber;
// }
// save(){
//   banksDb.push(this);
//   return this;
// }
// static all(){
//     return banksDb
// }
// }
// //middleware
// server.use(express.json());
// //controllers
// const createBanksController = (req, res)=>{
// //create bank
// const {name,location,branch,phone,address,accontNumber} = req.body
// const bank = new BankModel ({name,location,branch,phone,address,accontNumber})
// bank.save();
// res.json({message:‘create sucessfuly’, data: bank})
// }
// const updateBanksController = ()=>{
// }
// const listBanksController =(req,res)=>{
// //list all banks
// const bank = BankModel.all();
// res.json({data:bank})
// }
// const deleteBanksController = ()=>{
// }
// //route
// //access a list of bank
// server.get(‘/banks’, listBanksController)
// //create a bank
// server.post(‘/banks’,createBanksController)
// //update a bank
// server.put(‘/banks’, updateBanksController)
// // delete bank
// server.delete(‘/banks’, deleteBanksController)
// //server start
// server.listen(3000, ()=> console.log(‘server is working on PORT 3000’))