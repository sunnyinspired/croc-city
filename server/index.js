const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')



const app = express();
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/',routes);



app.listen(8000);
