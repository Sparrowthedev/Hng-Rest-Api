const Person = require("../model/person")

const getPerson = async (req, res) => {
    try{
        const person = await Person.findOne({name: req.query.name});
        
        if(!person) {
            return res.status(404).json({message: 'Person not found'})
        }

        res.status(200).json(person);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const addPerson = async (req, res) => {
    try{
        const name = req.body.name;
        
        if(name !== String){
            throw Error(`Name must be a string`)
        }

        const person = new Person(req.body);

        const savedPerson = await person.save();

        res.status(201).json(savedPerson);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}
const updatePerson = async (req, res) => {
    try{
        const person = await Person.findOne({name: req.query.name});

        if(!person) {
            return res.status(404).json({message: 'Person not found'})
        }

        Object.assign(person, req.body);

        const updatedPerson = await person.save();

        res.status(200).json({message: "Successfully updated", newPerson: updatedPerson})
    }catch(err){
        res.status(400).json({message: err.message});
    }
}


const deletePerson = async (req, res) => {
    try{
        const person = await Person.findOne({name: req.query.name})

        if(!person) {
            return res.status(404).json({message: 'Person not found'})
        }

        await Person.findOneAndDelete({name: person.name})

        res.status(200).json({message: 'Person deleted'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    addPerson,
    updatePerson,
    deletePerson,
    getPerson
};