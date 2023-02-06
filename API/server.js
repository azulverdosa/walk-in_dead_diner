require('dotenv').config(); //secrets file

const cors = require('cors');
const express = require('express');
// const mongoose = require('mongoose')

const app = express();

//define corsConfig
const corsConfig = {
  origin: true,
  credentials: true,
};

//then use config
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

app.use(express.json());

//server
app.get('/hello-hello', (req, res) => {
  res.send('Welcome to your app 🙈 🙉 🙊');
});

//port to listen on - 3030
app.listen(3030, function () {
  console.log('Express server is running on port 3030 🎉');
});
