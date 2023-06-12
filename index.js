const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3003;

const postRoutes = require("./routes/post");
const productRoutes = require("./routes/product");

app.use(bodyParser.json());

app.use("/posts", postRoutes);

app.use("/products", productRoutes);

mongoose
  .connect("mongodb://localhost:27017/cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à MongoDB réussie !");
  })
  .catch((error) => {
    console.error("Erreur de connexion à MongoDB :", error);
  });

const characters = [
  { name: "Jon Snow", house: "Stark" },
  { name: "Daenerys Targaryen", house: "Targaryen" },
  { name: "Tyrion Lannister", house: "Lannister" },
];

app.get("/characters", (req, res) => {
  res.json(characters);
});

app.get("/characters/:name", (req, res) => {
  const characterName = req.params.name;
  const character = characters.find((c) => c.name === characterName);

  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ error: "Personnage non trouvé." });
  }
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});

// ...

const errorHandler = require("./errorHandler");

// ...

app.use(errorHandler);
