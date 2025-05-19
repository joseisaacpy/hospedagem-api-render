const express = require("express"); // importa o express

const foodRecipes = require("./api");

const port = 3000; // define a porta do nosso servidor

const app = express(); // usa o express

// rota padrão
app.get("/", (req, res) => {
  res.send("<h1>Default Route</h1>"); // mensagem para o usuário
});

// rota da api
app.get("/foodRecipes", (req, res) => {
  res.send(foodRecipes); // responde com a api de receitas
});

app.listen(port, () => {
  console.log("Servidor ativo em https://localhost:3000");
});
