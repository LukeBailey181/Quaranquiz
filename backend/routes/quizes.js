const router = require('express').Router();
let Quizes = require('../models/quizes.model');

router.route('/').get( (req, res) => {
    Quizes.find() //mongoose method collect list of everythin in the dabase - returns a promise
        .then( (quizes) => res.json(quizes) )
        .catch( (err) => res.status(400).json('Error' + err));
})

router.route('/add').post( (req, res) => {
    const example = req.body.example;

    const newQuiz = new Quizes({example});

    newQuiz.save() //mongoose method to save
        .then( () => res.json('Example Quiz Added'))
        .catch (err => res.status(400).json('Error' + err));
})

module.exports = router;