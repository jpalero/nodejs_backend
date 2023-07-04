const express = require("express");
const { request } = require("http");
const router = express.Router();

const CreateService = require("../services/create");
const RetrieveService = require("../services/retrieve");
const UpdateService = require("../services/update");
const DeleteService = require("../services/delete");

//insert user using POST method. Send by client to the server
router.post(`/createUsers`, async (request, response) => {
  const { fname, lname, address, contact } = request.body;

  const result = await CreateService(fname, lname, address, contact);

  if (result) {
    response.status(200).send({
      status: result,
      message: "Successfully Created!",
    });
  } else {
    response.status(500).send({
      status: result,
      message: "failed to create!",
    });
  }
});

//Setting GET method by using reponse.send(request.query)
router.get(`/getUsers`, async (request, response) => {
  const { fname, lname, address, contact } = request.query;

  const arrFields = [];

  arrFields.push(fname);
  arrFields.push(lname);
  arrFields.push(address);
  arrFields.push(contact);

  const result = await RetrieveService(arrFields);

  if (result) {
    response.status(200).send(result);
  } else {
    response.status(500).send({
      status: result,
      message: "failed to retrieve!",
    });
  }
});

/* You can also send a json data
 router.get("/getUsers", (request, response) => {
  response.json({ 
    "fname": "John",
    "lname": "Smith"
  });
}); */

//update method to the database
router.post("/updateUser", async (request, response) => {
  const { id, newFname, newLname, newAddress, newContact } = request.body;

  const result = await UpdateService(
    id,
    newFname,
    newLname,
    newAddress,
    newContact
  );

  if (result) {
    response.status(200).send({
      status: result,
      message: "Successfully Updated!",
    });
  } else {
    response.status(500).send({
      status: result,
      message: "failed to updated!",
    });
  }
});

router.get("/deleteUser", async (request, response) => {
  const { id } = request.query;

  const result = await deleteService(id);

  if (result) {
    response.status(200).send({
      status: result,
      message: "Successfully Deleted!",
    });
  } else {
    response.status(500).send({
      status: result,
      message: "failed to deleted!",
    });
  }
});

//Same thing with react js. We need to export this function to be able to read in another js file.
module.exports = router;
