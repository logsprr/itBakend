import { DataTypes, Model } from "sequelize";
import database from "../models/index";

export class Certificado extends Model {
  public id!: number;
  public username!: string;
  public name!: string;
  public description!: string;
  public groups!: string;
  public expiration!: number;
  public expirated_at!: string;
}

Certificado.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    usernaname: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(1024),
      allowNull: false,
    },
    groups: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    expiration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Certificados",
    sequelize: database,
  }
);

Certificado.sync({ force: false }).then(() =>
  console.log("Tabela Criada ou Atualizada (Certificados)")
);
