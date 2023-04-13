// file qui permet de controller l'affichage dynamique sur chaque route
//par rapport aux données du fichier json

const articles = require("./data/articles.json");

const controller = {
  init: (req, res) => {
    console.log(__dirname + "/static");
    // res.send("Hello World");
    // res.sendFile(__dirname + "/integration/index.html");
    const newArticlesArray = articles.map((article) => {
      const textSplit = article.text.split(" ");
      const textSplitLimited = textSplit.slice(0, 29);
      const newText = textSplitLimited.join(" ");
      const modifiedArticle = { ...article, text: newText + " ..." };
      return modifiedArticle;
    });
    res.render("index", { articles: newArticlesArray });
  },
  getArticleById: (req, res) => {
    // const id = parseInt(req.params.id, 10);
    // const id = Number(req.params.id)
    const id = +req.params.id;
    console.log(id);
    const foundArticle = articles.find((article) => article.id === id);
    console.log(foundArticle);
    res.render("article", { article: foundArticle });
  },
  getArticlesByCategory: (req, res) => {
    const filteredArticles = articles.filter(
      (article) =>
        article.category.toLowerCase() === req.params.categoryName.toLowerCase()
    );
    res.render("index", { articles: filteredArticles });
  },
};

module.exports = controller;
