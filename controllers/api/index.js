const router = require("express").Router();

const characterRoute = require("./characterroute");
const userRoute = require("./userroute");
const commentRoute = require("./commentroute");

router.use("/character", characterRoute);
router.use("/user", userRoute);
router.use("/comment", commentRoute);

module.exports = router;
