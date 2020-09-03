require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;

connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});
//body parse..
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use(express.static('client/build'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}...`));
