const { Sequelize } = require('sequelize');
//const dbName = 'startNewData'  // is notConnection name that we r creating it inside we have 
                         //created the folder name database name inside {schemaName} 
 const dbUser='root'
 const dbPassword=''   
 const dbName='first-Data';  
 
 //'your_database', 'your_username', 'your_password'---> we can pass direct inside without creating variable

const sequelize = new Sequelize(dbName,dbUser,dbPassword, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;