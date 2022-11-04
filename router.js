const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/',(request, response) => {
   response.render('index')
  });

router.get('/article/id', (request, response) => {

let requestedArticle;

for (article of articles) {

    if (article.id === request.params.id) {
        requestedArticle = article;
    }
}
});








module.exports = router;