const connection = require("../database/connection");

module.exports = async (id, fname, lname, address, contact) => {
  try {
    const query =
      `UPDATE ` +
      `userInfo ` +
      `SET ` +
      `fname= '${fname}', ` +
      `lname= '${lname}', ` +
      `address= '${address}', ` +
      `contact= '${contact}', ` +
      `WHERE ` +
      `id = ${id}`;

    await connection(query);
    return true;
  } catch (error) {
    return false;
  }
};
