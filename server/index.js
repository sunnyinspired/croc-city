const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const cookieParser = require('cookie-parser')

const app = express();
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8000'],
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/api/',routes);



app.listen(8000);
