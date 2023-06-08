const express = require('express');
const morgan = require('morgan');
require('dotenv').config();


//Include all routes
const userRoutes = require("./routes/userRoutes");
const modelQueryRoutes = require("./routes/modelQuery");

//call db connection
require('./models'); //include db file

const app = express();

//package middleware
app.use(express.json());
//app.use(express.urlencoded({extended:true}));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//API endpoints
//app.get('/addContactTest',userController.addContactTest)
app.use('/api/users',userRoutes);
app.use('/api/modelQuery',modelQueryRoutes);



//serve frontend index html page
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....')
//   })
// }

//global error handler
// app.use(notFound)
// app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`App is running at port ${PORT}`);
})