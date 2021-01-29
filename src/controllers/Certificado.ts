import { Request, Response } from "express";
import { Certificado } from "../models/Certificado";
import { Op } from "sequelize";

export class CertificadoController {
  constructor() {}

  async save(req: Request, res: Response): Promise<Response | undefined> {
    try {
      if (req.body != null) {
        const certificado = await Certificado.create(req.body);
        console.log(certificado);
        if (certificado != null) {
          return res.status(200).json({
            success: true,
            error: null,
            certificado: certificado,
          });
        } else {
          return res.status(500).json({
            success: false,
            error: "Não foi possivel atender a solicitação",
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          error: "Faltam parametros",
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err,
      });
    }
  }

  async getAll(req: Request, res: Response): Promise<Response | undefined> {
    try {
      const certificados = await Certificado.findAll();
      if (certificados.length > 0) {
        return res.status(200).json({
          success: true,
          error: null,
          certificados: certificados,
        });
      } else {
        return res.status(200).json({
          success: true,
          error: "Não existem certificados",
          users: null,
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: "Aplicação fora do ar",
      });
    }
  }

  async getByKey(req: Request, res: Response): Promise<Response | undefined> {
    const { key } = req.params;
    try {
      const certificados = await Certificado.findAll({
        where: { name: { [Op.like]: "%" + key + "%" } },
      });
      if (certificados.length != 0) {
        return res.status(200).json({
          success: true,
          error: null,
          certificados: certificados,
        });
      } else {
        return res.status(200).json({
          success: true,
          error: "O certificado não existe",
          user: null,
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: "Aplicação fora do ar",
      });
    }
  }

  async getById(req: Request, res: Response): Promise<Response | undefined> {
    const { id } = req.params;
    try {
      const certificado = await Certificado.findOne({ where: { id: id } });
      if (certificado != null) {
        return res.status(200).json({
          success: true,
          error: null,
          certificado: certificado,
        });
      } else {
        return res.status(200).json({
          success: true,
          error: "O certificado não existe",
          users: null,
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: "Aplicação fora do ar",
      });
    }
  }

  async updateById(req: Request, res: Response): Promise<Response | undefined> {
    const { id } = req.params;
    try {
      const certificado = await Certificado.update(req.body, {
        where: { id: id },
      });
      if (certificado.length > 0) {
        return res.status(200).json({
          success: true,
          error: null,
          certificado: certificado,
        });
      } else {
        return res.status(400).json({
          success: true,
          error: "Faltam parametros",
          users: null,
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: "Aplicação fora do ar",
      });
    }
  }

  async delete(req: Request, res: Response): Promise<Response | undefined> {
    const { id } = req.params;
    try {
      const certificado = await Certificado.destroy({ where: { id: id } });
      if (certificado == null) {
        return res.status(200).json({
          success: true,
          error: null,
          certificado: certificado,
        });
      } else {
        return res.status(400).json({
          success: true,
          error: "Faltam parametros",
          users: null,
        });
      }
    } catch (err) {
      return res.status(200).json({
        success: false,
        error: "Aplicação fora do ar",
      });
    }
  }
}
