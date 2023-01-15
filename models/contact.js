//Define method
module.exports = (sequelize,DataTypes) => {
const Contact = sequelize.define('contacts', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      //defaultValue:'Jhon'
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue:0
    }
  }, {
    // Other model options go here
    //freezeTableName: true, //not pluralize
    //tableName: 'User',
    //timestamps: false //it will not create created and updated date
    //createdAt:false,
    //updatedAt:true,
    //updatedAt:'update_at', //rename column name
  });

  return Contact;
}


  