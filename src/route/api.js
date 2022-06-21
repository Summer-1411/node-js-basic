import express from 'express';
import APIController from '../controller/APIController'

let router = express.Router();

const initAPIRoute = (app) => {

    //method get: Read data
    router.get('/users', APIController.getAllUser)

    //method post: Create data
    router.post('/create-user', APIController.createNewUser)

    //method put: update data
    router.put('/update-user', APIController.updateUser)

    //method delete: delete data
    router.delete('/delete-user/:id', APIController.deleteUser)
   

    return app.use('/api/v1/', router)
}


export default initAPIRoute