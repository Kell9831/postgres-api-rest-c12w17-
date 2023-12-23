import express from "express";
import { BuscarDatosController, deleteController, createController,editController } from "../controllers/cliente.controllers";

const router = express.Router();
const path="/clientes";

router.get(path, BuscarDatosController);
router.delete(`${path}/:id`,deleteController);
router.post(path, createController);

router.patch(`${path}/:id/`, editController);

export default router;