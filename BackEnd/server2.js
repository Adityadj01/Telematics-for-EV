const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('Hello from Node.js server');
});

app.get('/', (req, res) => {
    res.render('home', {
      title: 'Search Hacker News',
    });
  });
  

const server = app.listen(process.env.PORT || 3005, () => {
  console.log(`Hacker news server started on port: ${server.address().port}`);
});
