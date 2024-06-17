import app from 'express'
import {createUser, getAllUsers, getUserById, loginUser, updateUserById, deleteUserById} from '../controllers/user.controller'

const router = app.Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.post('/login', loginUser)
router.get('/:userId', getUserById)
router.put('/:userId', updateUserById)
router.delete('/:userId', deleteUserById);

module.exports = router
