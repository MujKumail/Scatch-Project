require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");

const db = require("./config/mongoose-connection");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const indexRouter = require("./routes/index");

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(expressSession({
  secret: process.env.EXPRESS_SESSION_SECRET || "fallbackSecret",
  resave: false,
  saveUninitialized: false
}));

app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routers
app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// Start server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
