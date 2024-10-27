const express=require('express');
const { getGoal,createGoal, updateGoal, deleteGoal } = require('../controllers/GoalController');

const router=express.Router();


router.route('/').get(getGoal).post(createGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports=router;