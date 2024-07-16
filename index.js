const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use('/api', routes);

app.listen(3020, ()=>{
    console.log('Running');
});