const royes= require('express').Router();
const routes= require('./secion');

royes.use('/service',routes);

module.exports=royes;