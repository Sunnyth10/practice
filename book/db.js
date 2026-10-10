import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./books.db", (err) => {
  if (err) {
    console.error("Unable to connect to the database:", err.message);
    return;
  }

  console.log("Connected to the SQLite database.");
});

export default db;
