const express = require('express');
const app = express();
const router = require('./router.js');
const articles = require('./data/articles.json');
const { render } = require('ejs');
const { response } = require('express');
app.locals.articles=articles;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static'));

//app.get("/", (request,response)=>{
//   response.sendFile(__dirname+"/integration/index.html")
//response.render("index", {});
//})


app.locals.articles = articles;



app.use(router);

const port = 3011;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
// ou port = 3000;
// app.listen(port,()=>{
//    console.log(`server running on http:::localhost:${port}`)
//})