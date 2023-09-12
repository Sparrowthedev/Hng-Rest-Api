const express = require('express');
const { addPerson, updatePerson, deletePerson, getPerson } = require('../controllers/controllers');

const router = express.Router()


router.post('/persons', addPerson);

router.get('/persons', getPerson);

router.put('/persons', updatePerson);

router.delete('/persons', deletePerson)

module.exports = router;
