const db = require('../models');
const Contact = db.contact;

const addContactTest = async (req,res) => {
    //Method 1
    // const jane = Contact.build({ firstName: "Aamir", lastName: "Khan" });
    // await jane.save();
    // res.status(200).json(jane.toJSON());

    //Method 2 Short hand
    // const jane = await Contact.create({ firstName: "Arshad", lastName: "Khan" });
    // res.status(200).json(jane.toJSON());
    
    //Method 3 Update
    // const jane = await Contact.create({ firstName: "Azhar", lastName: "Khan" });
    // jane.firstName = "Ada"; 
    // await jane.save(); //update
    // res.status(200).json(jane.toJSON());
    
    //Method 4 update all
    // const jane = await Contact.create({ firstName: "Jane",lastName:"Ven" });
    // jane.set({
    //     firstName: "Test",
    //     lastName: "blue"
    // });
    // await jane.save();
    // res.status(200).json(jane.toJSON());
    
    //Method 5 update specific
    // const jane = await Contact.create({ firstName: "Jane",lastName:"Ven" });
    // jane.lastName = "blue11"
    // await jane.update({ firstName: "Ada11" }); //only update firstName
    // res.status(200).json(jane.toJSON());

    const jane = await Contact.create({ firstName: "Jane",lastName:"Ven",age: 100 });
    const result = await jane.increment('age', { by: 2 });
    await result.reload();
    res.status(200).json(result.toJSON());
}

module.exports = {
    addContactTest
}