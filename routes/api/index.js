// hey document, use these OTHER documents to make the routes work, please.
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");
// this is setting the text that we will put in our URL to create the routes. 
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;