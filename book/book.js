import express from "express";
import db from "./db.js";
const PORT = 8000;
const app = express();
app.use(express.json());
db.run(
  `create table if not exists books(
    id integer primary key autoincrement,
    title text not null,
    author text,
    price integer
    )`,
  (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("books table created successfully");
    }
  },
);
app.post("/books", (req, res) => {
  const { title, author, price } = req.body;
  if (!title || !author || !price) {
    return res.status(400).json({"message": "Please provide title, author, and price"}); 
  }
  if (price <= 0) {
    return res.status(400).json({"message": "Price must be greater than 0"});
  }
  db.run(
    "INSERT INTO books(title, author, price) VALUES (?, ?, ?)",
    [title, author, price],
    function (err) {
      if (err) {
        return res.status(500).json({
            success: false,
            message: "Failed to add book",
            error: err.message
        });
      }
      res.status(201).json({
        success: true,
        message: "Book Added Successfully",
        id: this.lastID,
      });
    },
  );
});
app.get("/books", (req, res) => {
  db.all("SELECT * FROM books", [], (err, rows) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.json(rows);
  });
});
app.get("/books/pagination", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const offset = (page - 1) * limit;

  db.all("SELECT * FROM books limit ? offset ? ", [limit, offset], (e, r) => {
    if (e) return res.status(500).json({"message": e.message});
    res.json(r);
  });
});

app.get("/books/search", (req, res) => {
  const { author } = req.query;
  db.all("SELECT * FROM books WHERE author=?", [author], (err, rows) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.json(rows);
  });
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM books WHERE id=?", [id], (err, rows) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.json(rows);
  });
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, price } = req.body;
  db.run(
    "UPDATE books SET title=?, author=?, price=? WHERE id=?",
    [title, author, price, id],
    function (err) {
      if (err) {
        return res.status(500).json({"message": err.message});
      }
      if (this.changes === 0) {
        return res.status(404).json({"message": "Book not found"});
      }
      res.json({"message": "Book updated successfully"});
    },
  );
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM books WHERE id=?", [id], function (err) {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    if (this.changes === 0) {
      return res.status(404).json({"message": "Book not found"});
    }
    res.json({"message": "Book deleted successfully"});
  });
});

app.get("/", (req, res) => {
  res.json({"message": "database connected successfully"});
});

app.listen(PORT, () => {
  console.log(`server is running on port: localhost:${PORT}`);
});
