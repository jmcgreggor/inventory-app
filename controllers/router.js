const express = require('express');
const dataFunctions = require('./catalog.js');
const AppRouter = express.Router();

AppRouter.post('/users', dataFunctions.createUser);

AppRouter.get('/users', dataFunctions.listAllUsers);

AppRouter.get('/users/:id', dataFunctions.listUserByUserID);

AppRouter.delete('/users/:id', dataFunctions.deleteUserByUserID);

AppRouter.put('/users/:id', dataFunctions.updateUserRecordByUserID);


module.exports = AppRouter;

//TODO: Enter routes for listing all
//TODO: Enter routes for listing specific
//TODO: Enter routes for creating new
//TODO: Enter routes for deleting specific
