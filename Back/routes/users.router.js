const { Router } = require('express');
const { createUser, getUsers, getUserById, updateUserById, deleteUserById, getUserByCountry } = require('../controllers/users.controller');
const { check } = require('express-validator');
const { validateField } = require('../middlewares/validate-field');
const router = Router();

// Create User
router.post('/', createUser);
// Read all users
router.get('/', getUsers);
// Read user by id
router.get('/:userId', getUserById);
// Read user by country
router.get('/country/:country', getUserByCountry);
// Update user by id
router.put('/:userId', updateUserById);
// Delete user by id
router.delete('/:userId', deleteUserById);


module.exports = router;
