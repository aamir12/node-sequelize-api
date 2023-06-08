//use model class
module.exports = (sequelize,DataTypes,Model) => {
  class User extends Model {}
  User.init({
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue:'Khan',

      // allowNull defaults to true
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    //timestamps:false,
  });

  return User;
}

