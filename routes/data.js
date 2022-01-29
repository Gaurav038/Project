const express = require("express");
const router = express.Router()
const datas = require('../models/data')

// get all users data
router.get('/', async(req, res) => {
    try {
        const data = await datas.find()
        res.json(data)
    } catch (error) {
        res.send('Error'+error)
    }
})

// create users data
router.post('/', async(req, res) => {
    const data = new datas({
        employee_name: req.body.employee_name,
        employee_salary: req.body.employee_salary,
        employee_age: req.body.employee_age,
    })
    try {
        const a1 = await data.save()
        res.json(a1)
    } catch (error) {
        res.send('Error'+error)
    }
})

// Get a user by id
router.get('/:id', async(req, res) => {
    try{
        const user = await datas.findById(req.params.id);
        res.status(200).json(user);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
})


// Update users data
router.patch('/:id', async(req, res) => {
    try {

        const updates = req.body;
        const options = {new:true}
        const rslt = await datas.findByIdAndUpdate(req.params.id, updates, options)
        
        res.json(rslt)
    } catch (error) {
        res.send('ERROR'+error)
    }
})

module.exports = router;