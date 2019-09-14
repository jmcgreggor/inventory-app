const Users = require('../models/users.js');
const Products = require('../models/products.js');
const Subscriptions = require('../models/subscriptions.js');
const Licenses = require('../models/licenses.js');
const Assignments = require('../models/assignments.js');
const Memberships = require('../models/memberships.js');


// Create functions

async function createUser(req, res) {
  try {
    const userId = await Users.newUser(
      req.body.user_id,
      req.body.first_name,
      req.body.middle_initial,
      req.body.last_name,
      req.body.email,
      req.body.type,
    );

    res.status(201).send(`User ID: ${userId.id}`);

  } catch(error) {
    res.status(400).send(error);
  }
}

async function createProduct(req, res) {

}

async function createSubscription(req, res) {

}

async function createLicense(req, res) {

}

async function createAssignment(req, res) {

}

async function createMembership(req, res) {

}

// List all functions

async function listAllUsers(req, res) {
  try {
    const userList = await Users.allUsers();

    res.status(200).send(userList);

  } catch(error) {
    res.status(400).send(error);
  }
}

async function listAllProducts(req, res) {

}

async function listAllSubscriptions(req, res) {

}

async function listAllLicenses(req, res) {

}

async function listAllAssignments(req, res) {

}

async function listAllMemberships(req, res) {

}

// List by ID functions

async function listUserByUserID(req, res) {
  try {
    const lookupId = req.params.id;

    //TODO: move if statement above try 
    if (lookupId !== null && lookupId.match(/^[0-9]+$/)) {

      const userId = await Users.selectUser(lookupId);

      if (Array.isArray(userId) && userId.length > 0) {
        res.status(200).json(userId[0]);

      } else {
        res.status(404).send("Record Not Found");
      }

    } else {
      res.status(404).send("Invalid Lookup");
    }

  } catch(error) {
    res.status(500).send("Internal Error");
  }
}

async function listProductById(req, res) {

}

async function listSubscriptionById(req, res) {

}

async function listLicenseById(req, res) {

}

async function listAssignmentById(req, res) {

}

async function listMembershipById(req, res) {

}

// Delete by ID functions

async function deleteUserByUserID(req, res) {
  try {

    const deleteId = req.params.id

    //TODO: move if statement above try
    if (deleteId !== null && deleteId.match(/^[0-9]+$/)) {
      await Users.deleteUser(deleteId);

      res.status(200).send("Success");

    } else {
      res.status(404).send("Not Found");
    }

  } catch(error) {
    res.status(500).send("Internal Error");
  }
}

async function deleteProductById(req, res) {

}

async function deleteSubscriptionById(req, res) {

}

async function deleteLicenseById(req, res) {

}

async function deleteAssignmentById(req, res) {

}

async function deleteMembershipById(req, res) {

}

// Update specific by ID

//async function updateUserEmailByUserID(req, res) {
async function updateUserRecordByUserID(req, res) {

  //First check to see if the ID is valid
  if (req.params.id !== null && req.params.id.match(/^[0-9]+$/)) {

    const updateId = req.params.id;
    const updateRecord = req.body.recordToUpdate;
    const updateValue = req.body.updateValue;
    const userValidation = await Users.selectUser(updateId);

    //Then check to see if the ID exists
    if (Array.isArray(userValidation) && userValidation.length > 0) {

      try {
        const userId = await Users.updateUserRecord(
          updateId,
          updateRecord,
          updateValue
        );

        res.status(201).send(`User # ${updateId} updated`);

      } catch(error) {
        res.status(400).send(error);
      }

    } else {
      res.status(404).send("Record Not Found");
    }

  } else {
     res.status(404).send("Invalid ID");
  }
}


/*
Need to think this through when handling
subscriptions
*/

module.exports = {
  createUser,
  createProduct,
  createSubscription,
  createLicense,
  createAssignment,
  createMembership,
  listAllUsers,
  listAllProducts,
  listAllSubscriptions,
  listAllLicenses,
  listAllAssignments,
  listAllMemberships,
  listUserByUserID,
  listProductById,
  listSubscriptionById,
  listLicenseById,
  listAssignmentById,
  listMembershipById,
  deleteUserByUserID,
  deleteProductById,
  deleteSubscriptionById,
  deleteLicenseById,
  deleteAssignmentById,
  deleteMembershipById,
  updateUserRecordByUserID
};
