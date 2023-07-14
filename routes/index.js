// I low-key hate express but it's the savior of the project. Require it.
const router = require("express").Router();
// You'll need the api folder if you want to use routes.
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// if the user types in something wrong or unacceptable, get this message.
router.use((req, res) => {
  return res.send("Wrong route!");
});

module.exports = router;