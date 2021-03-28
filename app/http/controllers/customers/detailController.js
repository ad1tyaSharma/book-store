const Book = require("../../../models/book");

function detailController() {
  return {
    async index(req, res) {
      const books = await Book.findOne({ _id: req.params["id"] });
      console.log(books);
      console.log(req.params["id"]);
      return res.render("customers/details", { books: books });
    },
  };
}

module.exports = detailController;
