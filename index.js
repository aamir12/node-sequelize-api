const express = require('express');
require('./models'); //include db file
const app = express()


app.use(express.json());
//app.use(express.urlencoded({extended:true}));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000,()=>{
    console.log(`App is running at port 3000`);
})