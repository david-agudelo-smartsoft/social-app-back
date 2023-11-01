const express = require('express');
const router = express.Router();
const { getUsers, getUser, createUser, loginUser, updateUser, deleteUser, validEmail,validUsername} = require('../controller/UserController');
const { loginGoogle } = require('../controller/auth');

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

router.route('/login').post(loginUser);

router.route('/validEmail/:email').get(validEmail);

router.route('/validUsername/:username').get(validUsername);

router.route('/google').post(loginGoogle);

module.exports = router;