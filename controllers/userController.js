const db = require('../models');
const User = db.user;

const addContactTest = async (req,res) => {
    const Contact = db.contact;
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

    // const jane = await Contact.create({ firstName: "Jane",lastName:"Ven",age: 100 });
    // const result = await jane.increment('age', { by: 2 });
    // await result.reload();
    // res.status(200).json(result.toJSON());
}

const getUsers = async (req,res) => {
  const data = await User.findAll();  
  res.status(200).json({data});
}

const getUser = async (req,res) => {
    const data = await User.findOne({
        where: {
            id:req.params.id
        }
    });

    if(data) {
        res.status(200).json({data});
    }else {
        res.status(400).json({message:"data not found"});
    }  
}

const createUser = async (req,res) => {
    const user = req.body;
    const data = await User.create(user);
    res.status(200).json({data});
}

const bulkCreateUser = async (req,res) => {
    const users = req.body;
    const data = await User.bulkCreate(users);
    res.status(200).json({data});
}

const deleteUser = async (req,res) => {
    const data = await User.destroy({
      where : {
        id: req.params.id
      }
    });
    // Truncate the table and delete all the records
    // await User.destroy({
    //     truncate: true
    // });
    res.status(200).json({data});
}

const updateUser = async (req,res) => {
    const updateFields = req.body;
    const data = await User.update(updateFields, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({data});
}




module.exports = {
    addContactTest,
    getUsers,
    getUser,
    createUser,
    bulkCreateUser,
    deleteUser,
    updateUser
}