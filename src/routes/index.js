import express from "express";
import { routerProduto } from "./produtos.route.js";
import { generoRouter } from "./genero.routes.js";

const routes = (app) => {
  // endpoint inicial
  app.get("/", (req, res) =>  res.send({ msg: "Servidor rodando!", codigo: 200 }) );

  app.use(express.json(), routerProduto, generoRouter);
};

export default routes;