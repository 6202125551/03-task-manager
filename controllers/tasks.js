const mongoose= require('mongoose');
const Task = require('../models/task')

const getAllTasks = async(req, res) => {

    try {
        const tasks = await Task.find({})
        res.status(200).json({success:true,tasks})
    } catch (error) {
        console.log(error)
        
    }
   
}

const getTask = async(req, res) => {
     const id = req.params.id
     try {
        const task = await Task.findById({_id:id})
        res.json({success:true, task})
     } catch (error) {
        console.log(error)
     }
    
}

const createTask = async(req, res) => {

    const {name, completed} =  req.body;
try {
    const task = await Task.create({name,completed})
    res.status(201).json({success:true, task})
} catch (error) {
    console.log(error)   
}
   
}

const updateTask = async(req, res) => {
  const id=  req.params.id
  const {name,completed} = req.body
    try {
        const task = await Task.findByIdAndUpdate({_id:id},{name,completed})
        res.json({success:true, task})

  } catch (error) {
    console.log(error) 
  }
    
}

const deleteTask =  async(req, res) => {

    const id = req.params.id
    try {
        
        const task = await Task.findByIdAndRemove({_id:id})
        res.json({success:true, task})
    } catch (error) {
        console.log(error) 
    }
    
}

module.exports = {getAllTasks, getTask, createTask,updateTask,deleteTask}
