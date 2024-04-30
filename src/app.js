import express from "express";
import morgan from "morgan";
import { Book } from "./model.js";
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();
    if (books) {
      return res.status(200).json(books);
    }
    return res.status(404).json({ error: "Books not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const data = req.body;
    const book = await Book.create(data);
    if (book) {
      return res.status(201).json(book);
    }
    return res.status(400).json({ error: "Unable to create book" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default app;
