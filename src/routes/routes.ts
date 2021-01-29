import express from "express";

const routes = express.Router();

import { CertificadoController } from "../controllers/Certificado";

const certificadoController = new CertificadoController();

routes
  .route("/certificados")
  .get(certificadoController.getAll)
  .post(certificadoController.save);
routes
  .route("/certificados/:id")
  .get(certificadoController.getById)
  .post(certificadoController.updateById)
  .delete(certificadoController.delete);
routes.get("/certificados/search/:key", certificadoController.getByKey);

export default routes;
