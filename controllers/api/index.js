const router = require("express").Router();

const characterRoute = require("./characterroute");
const userRoute = require("./userroute");
const commentRoute = require("./commentroute");
const formRoute = require("./formroute")

router.use("/character", characterRoute);
router.use("/user", userRoute);
router.use("/comment", commentRoute);
router.use("/class", formRoute);

module.exports = router;
