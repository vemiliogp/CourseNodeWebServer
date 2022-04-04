require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estatico
app.use(express.static("public"));

// Si sirvo el contenido estatico este endpoint no tiene efecto
// app.get("/", (req, res) => {
//   res.send("Home page");
// });

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo en su respectiva ruta");
});

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Victor Gonzalez",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Victor Gonzalez",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Victor Gonzalez",
    titulo: "Curso de Node",
  });
});

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "/public/generic.html");
// });

// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html");
// });

app.get("*", (req, res) => {
  // res.send("404 | Page not found");
  console.log(__dirname);
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
