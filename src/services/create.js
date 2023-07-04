const connection = require("../database/connection");

module.exports = async (fname, lname, address, contact) => {
  try {
    const query =
      `INSERT INTO ` +
      `userInfo ` +
      `VALUES ` +
      `(null, '${fname}', '${lname}', '${address}', '${contact}')`;

    await connection(query);
    return true;
  } catch (error) {
    return false;
  }
};
