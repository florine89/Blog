const express = require('express');
const app = express();
app.set('view engine', 'ejs');

console.log('bonjour');

app.get('/', function(req, res) {
    res.send('hello world');
  });






const port = 3011;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});