const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const orderController = require("../app/http/controllers/customers/orderController");
const adminOrderController = require("../app/http/controllers/admin/orderController");
const statusController = require("../app/http/controllers/admin/statusController");
const detailController = require("../app/http/controllers/customers/detailController");
const editorChoice = require("../app/models/editorChoice");
const bestSeller = require("../app/models/bestSeller");
// Middlewares
const guest = require("../app/http/middlewares/guest");
const auth = require("../app/http/middlewares/auth");
const admin = require("../app/http/middlewares/admin");

function initRoutes(app) {
  app.get("/", homeController().index);
  app.get("/login", guest, authController().login);
  app.post("/login", authController().postLogin);
  app.get("/register", guest, authController().register);
  app.post("/register", authController().postRegister);
  app.post("/logout", authController().logout);
  app.get("/detail/:id", detailController().index);
  app.get("/cart", cartController().index);
  app.post("/update-cart", cartController().update);
  app.get("/editorChoice", async (req, res) => {
    const books = await editorChoice.find();
    res.render("customers/chart", { books: books, use: "Editor Choice" });
  });
  app.get("/bestSeller", async (req, res) => {
    const books = await bestSeller.find();
    res.render("customers/chart", { books: books, use: "Best Sellers" });
  });
  // Customer routes
  app.post("/orders", auth, orderController().store);
  app.get("/customer/orders", auth, orderController().index);
  app.get("/customer/orders/:id", auth, orderController().show);

  // Admin routes
  app.get("/admin/orders", admin, adminOrderController().index);
  app.post("/admin/order/status", admin, statusController().update);
}

module.exports = initRoutes;
