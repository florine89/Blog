const express = require('express');
const app = express();
const router = require('./router.js');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static'));








app.use(router);

const port = 3011;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});