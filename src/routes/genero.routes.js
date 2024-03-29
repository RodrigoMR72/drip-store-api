import express from "express";
import { GeneroController } from "../controllers/generoController.js";

export const generoRouter = express.Router();

generoRouter
    .post("/genero", GeneroController.criar)
    .get("/generos", GeneroController.buscarTodos)
/*.get("/produto/:id", ProdutoController.buscarPorId)
.put("/produto/:id", ProdutoController.atualizar)
.delete("/produto/:id", ProdutoController.excluir) */