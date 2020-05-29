const { query } = require("../index.js");

async function createPostTable() {
  const res = await query(`CREATE TABLE IF NOT EXISTS posts
    (
        id SERIAL PRIMARY KEY,
        title TEXT,
        content TEXT,
        votes INTEGER,
        comments TEXT[],
        userID INTEGER
    )
    `);
  console.log(res);
}

async function createUsersTable() {
  const res = await query(` CREATE TABLE IF NOT EXISTS redditUsers (
        userID SERIAL PRIMARY KEY,
        username TEXT,
        timestamp TIMESTAMP,
        password TEXT
    )`);
}

createPostTable();
createUsersTable();
