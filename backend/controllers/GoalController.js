const customError = require('../errorClass/CustomError');
const Goal =require('../models/GoalModel')

const getGoal=async(req,res,next)=>{
     try {
        const goals=await Goal.find();
        res.send(goals)
     } catch (error) {
        console.log(error);
     }
}

const createGoal=async(req,res,next)=>{
  try {
     const goals=await Goal.create(req.body);
     res.send(goals);
  } catch (error) {
    console.log(error)

  }
}
const updateGoal=async(req,res,next)=>{
try {
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        throw new customError(`goal not found with id = ${req.params.id}`,400)
    }
    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send(updatedGoal)
    
} catch (error) {
    next(error)
}
}
const deleteGoal=async(req,res,next)=>{
    try {
        const deletedGoal=await Goal.findById(req.params.id);
        if(!deletedGoal){
           throw new customError(`goal not found with id = ${req.params.id}`);
        }
    await Goal.findByIdAndDelete({_id:req.params.id});
    res.send(`goal delete with id = ${req.params.id}`);

    } catch (error) {
       next(error) 
    }
}

module.exports={getGoal,createGoal,updateGoal,deleteGoal};