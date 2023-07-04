//import mysql to this file
const mysql = require("mysql");

//configure the database
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "nodejs-mysql",
};

//stablish a connection on your database using mysql.createConnection()
const DBconn = mysql.createConnection(dbConfig);

module.exports = (query) => {
  return new Promise((resolve, reject) => {
    DBconn.connect((error) => {
      //validating if DB is connected to our server
      if (error) {
        reject(error);
      } else {
        DBconn.query(query, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      }
    });
  });
};
