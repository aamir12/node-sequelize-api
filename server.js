const express = require('express');
require('./models'); //include db file
const app = express()


app.use(express.json());
//app.use(express.urlencoded({extended:true}));

const userController = require("./controllers/userController");

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/addContactTest',userController.addContactTest)

app.listen(3000,()=>{
    console.log(`App is running at port 3000`);
})