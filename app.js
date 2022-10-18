const fs = require("node:fs/promises");

// get Users function
async function getUsers() {
  // Read the JSON data and store it in a variable
  const usersJSON = await fs.readFile("./users.json");
  // Convert/Deserialize the JSON data to a JS array
  const users = JSON.parse(usersJSON);
  // Log out the results
  console.log(users);
}