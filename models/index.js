const { query } = require("../db/index");

async function createPost({ title, content, votes, comments, userID }) {
  const data = await query(
    ` INSERT INTO posts (
        title,
        content,
        votes,
        comments,
        userID
    ) VALUES ($1, $2, $3, $4, $5) RETURNING title
    `,
    [title, content, votes, comments, userID]
  );
  return data.rows[0];
}

async function getAllPosts() {
  const data = await query(` SELECT * FROM posts `);
  return data.rows;
}

async function getByTitle(search) {
  const data = await query(
    `SELECT * FROM posts WHERE title ILIKE '%' || $1 || '%'`,
    [search]
  );
  return data.rows;
}

async function getAllUsers() {
  const data = await query(`select * FROM redditUsers`);
  return data.rows;
}

async function createUser({ username, password }) {
  const data = await query(
    ` INSERT INTO redditUsers (
        username,
        password
    ) VALUES ( $1, $2) RETURNING username`,
    [username, password]
  );
  return data.rows[0];
}

async function getUserByUsername({ search }) {
  const data = await query(
    `
    SELECT * FROM redditUsers WHERE username ILIKE '%' || $1 || '%'`,

    [search]
  );
  return data.rows;
}

async function updatePost({ title, content, votes, comments, id }) {
  const data = await query(
    `UPDATE posts 
SET
title = COALESCE($1, title),
content = COALESCE($2, content),
votes = COALESCE($3, votes),
comments = COALESCE($4, comments)
WHERE id = $5`,
    [title, content, votes, comments, id]
  );
  return data.rows[0];
}

module.exports = {
  createPost,
  getAllPosts,
  getByTitle,
  getAllUsers,
  createUser,
  getUserByUsername,
  updatePost
};
