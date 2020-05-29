const { query } = require("../index.js");

async function dropPosts() {
  const res = await query(`DROP TABLE posts`);
  console.log(res);
}
async function dropUsers() {
  const res = await query(`DROP TABLE users`);
  console.log(res);
}

dropPosts();
dropUsers();
