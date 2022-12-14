const express = require('express')
const router = express.Router()
const { getGoals, setGoal,updateGoal,deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect,setGoal)
router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal)

// Exporting router - line 2
module.exports = router

// @note These methods are the same as line 5-6. Line 5-6 some different syntax
//       in order to save space, however same functionality.
// router.get('/',getGoals)
// router.post('/',setGoal)
// router.put('/:id',updateGoal)
// router.delete('/:id',deleteGoal)