const connection = require("../database/connection");

module.exports = async (arrFields) => {
  try {
    const query = `SELECT ` + `${arrFields} ` + `FROM ` + `userInfo`;

    const result = await connection(query);
    return result;
  } catch (error) {
    return [];
  }
};
