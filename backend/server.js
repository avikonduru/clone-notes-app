const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

//Connect Database
connectDB();

//Middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

//Routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/folder', require('./routes/folder'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));