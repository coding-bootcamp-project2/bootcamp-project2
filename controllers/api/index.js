const router = require("express").Router();

const characterRoute = require("./characterroute");
const userRoute = require("./userroute");
const commentRoute = require("./commentroute");
const classRoute = require("./classroute");
const charactersAllRoute =require("./charactersallroute");

router.use("/character", characterRoute);
router.use("/user", userRoute);
router.use("/comment", commentRoute);
router.use("/class", classRoute);
router.use("/charactersall", charactersAllRoute),

module.exports = router;
