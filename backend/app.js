const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post("/api/books", (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
    message: "Livre créé !"
  });
});

app.get("/api/books", (req, res, next) => {
    const books = [
        {
        id : "",
        userId: "oeihfzeoi",
        title: "Le premier livre",
        author: "Auteur du premier livre",
        imageUrl: "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
        year: "Année de publication du premier livre",
        genre: "Genre du premier livre",
        ratings: [
            {
                userId: "",
                grade: "note sur 5 du premier livre",
            }
        ],
        averageRating: "note moyenne du premier livre"
        },
        {
        id : "",
        userId: "oeihfzeoi",
        title: "Le deuxième livre",
        author: "Auteur du deuxième livre",
        imageUrl: "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
        year: "Année de publication du deuxième livre",
        genre: "Genre du deuxième livre",
        ratings: [
            {
                userId: "",
                grade: "note sur 5 du deuxième livre",
            }
        ],
        averageRating: "note moyenne du deuxième livre"
        },
    ];
    res.status(200).json(books);
});

module.exports = app;