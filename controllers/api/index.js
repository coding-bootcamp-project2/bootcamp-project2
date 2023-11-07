const router = require("express").Router();

const characterRoute = require("./characterroute");
const userRoute = require("./userroute");
const commentRoute = require("./commentroute");
const classRoute = require("./classroute");

router.use("/character", characterRoute);
router.use("/user", userRoute);
router.use("/comment", commentRoute);
router.use("/class", classRoute);

module.exports = router;
