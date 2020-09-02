const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
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
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}...`));
