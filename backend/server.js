
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


//Middleware 
app.use(cors());   
app.use(express.json());    //send and recieve json

/*----------Connecting to DB----------*/
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {console.log("MONGO DB CONNECTION ESTABLISHED")})

/*----------Routing----------*/

const quizzesRouter = require('./routes/quizes');
app.use('/quizes', quizzesRouter);



app.listen(port, () => {console.log(`Server is running on port ${port}`)});


