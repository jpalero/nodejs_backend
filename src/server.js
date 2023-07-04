// Import the express js and body-parser using require function
const express = require("express");
const bodyParser = require("body-parser");

//Calling the express function
const app = express();

/* Middleware */
//bodyParser use to call json object on body in every client request
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
//Need to import routes in this file using require function.
const usersRoutes = require("./routes/userInfo");

//setting the path (/users) then add the import usersRoutes which is (/getUsers). It shoud looklike this (localhost:3000/users/getUsers).
app.use("/users", usersRoutes);

//Setting up the port into 3000
const port = 3000;

app.listen(port, () => {
  console.log("Listening on port", port);
});
