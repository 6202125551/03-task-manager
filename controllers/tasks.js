const mongoose= require('mongoose');
const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper(async(req, res) => {

    
        const tasks = await Task.find({})
        res.status(200).json({success:true,tasks, amount: tasks.length})
   
        
   
})

const getTask = asyncWrapper(async(req, res) => {
     const id = req.params.id
     
        const task = await Task.findById({_id:id})
        if(!task){
           return res.status(404).json({msg:`No task with Id :${id}`})
        }
        res.json({success:true, task})
    
        
    
})

const createTask = asyncWrapper(async(req, res) => {

    const {name, completed} =  req.body;

    const task = await Task.create({name,completed})
    res.status(201).json({success:true, task})

    
   
})

const updateTask = asyncWrapper(async(req, res) => {
  const id=  req.params.id
  const {name,completed} = req.body
 
  
        const task = await Task.findByIdAndUpdate({_id:id},{name,completed})
        if(!task){
            return res.status(404).json({msg:`Not found id: ${id} to update`})
        }
        res.json({success:true, task})


        
    
})

const deleteTask =  asyncWrapper(async(req, res) => {

    const id = req.params.id
   
        
        const task = await Task.findByIdAndRemove({_id:id})
        if(!task){
            return res.status(404).json({msg:`Not found id: ${id} to delete`})
        }
        res.json({success:true, task})
 
        
    
})

module.exports = {getAllTasks, getTask, createTask,updateTask,deleteTask}
