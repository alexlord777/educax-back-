const express= require('express');
const routes= require('./src/routes/routes');
const {conn}= require('./src/config/db');
const cors = require('cors');
const app= express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


app.use(express.json())
app.use('/',routes)

conn.sync({ force:false}).then(() => {
  app.listen(3000,()=>{
      console.log(`Server listen on port ${3000}`);
  });
});
