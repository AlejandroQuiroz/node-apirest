import { Router } from 'express'
import { getAllUsers, getUserById, createUser, deleteUserById, editUserById } from '../controllers/users.controllers.js'

const router = Router()

// GET ALL USERS
router.get('/api/v1/users', getAllUsers)

// GET USER BY ID
router.get('/api/v1/users/:user_id', getUserById)

// CREATE USER
router.post('/api/v1/users', createUser)

// DELETE USER
router.delete('/api/v1/users/:user_id', deleteUserById)

// EDIT USER
router.put('/api/v1/users/:user_id', editUserById)

export default router