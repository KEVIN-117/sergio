import { Model, DataTypes } from "sequelize";

const BOOK_TABLE = "books";

const bookSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export class Book extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: BOOK_TABLE,
      modelName: "Book",
      timestamps: true,
    };
  }
}

export function init(sequelize) {
  Book.init(bookSchema, Book.config(sequelize));
}
