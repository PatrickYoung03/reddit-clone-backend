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

module.exports = {
  createPost
};
