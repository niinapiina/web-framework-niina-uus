const express = require("express");
const fs = require("fs");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();
const PORT = 3000;

//Parsinnat ja staattiset filut
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Handlebar
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Datan luku JSONista
const filePath = path.join(__dirname, "data", "movies.json");
let movies = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Home route
app.get("/", (req, res) => {
res.redirect("/movies-page");
});
