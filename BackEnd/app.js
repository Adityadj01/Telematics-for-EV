// app.js

const express = require('express');
const app = express();

// Require the index router
const indexRouter = require('./routes/index1');

// Use the index router
app.use('/', indexRouter);

// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
