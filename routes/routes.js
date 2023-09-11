const express = require('express');
const { addPerson, updatePerson, deletePerson, getPerson } = require('../controllers/controllers');

const router = express.Router()


router.post('/persons', addPerson);

router.get('/persons/:name', getPerson);

router.put('/persons/:name', updatePerson);

router.delete('/persons/:name', deletePerson)

module.exports = router;
