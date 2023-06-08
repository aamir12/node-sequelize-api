const { Sequelize,Op,user } = require('../models');
const User = user;

const specificField = async (req,res) => {
    //Insert Specific Fields
    // const jane = await User.create({ firstName: "Arshad", lastName: "Verma" },{ fields: ['firstName'] });
    // res.status(200).json(jane.toJSON());

    //Show Specific fields
    // const data = await User.findAll({ attributes: ['firstName'] });
    // res.status(200).json({data});


    // //Alias Colomn name
    // const data = await User.findAll({ attributes: ['firstName',['lastName','last_name']] });
    // res.status(200).json({data});

     // Exclude Colomn name, it will show all the columns
    // const data = await User.findAll({ attributes: {exclude:['firstName']} });
    // res.status(200).json({data});

    //Alias Colomn name --- it has mysql error --not working
    // const data = await User.findAll({ attributes: [

    //     [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']
    //     ],group: 'id' });
    // res.status(200).json({data});


    //SELECT ... FROM "User" AS "User" WHERE char_length("content") = 7
    // const data = await User.findAll({
    //     where: Sequelize.where(Sequelize.fn('char_length', Sequelize.col('lastName')), 4)
    // });
    // res.status(200).json({data});

    const data = await User.findAll({
        where: {
            [Op.or]: [
                { id: 9},
                { firstName: 'aamir' }
            ]
        }
    });
    res.status(200).json({data});


}

module.exports = {
    specificField,
}