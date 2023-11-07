const router = require("express").Router();

const characterRoute = require("./characterroute");
const userRoute = require("./userroute");
const commentRoute = require("./commentroute");
const classRoute = require("./classroute");
const monsterRoute = require("./monsterroute");

router.use("/character", characterRoute);
router.use("/user", userRoute);
router.use("/comment", commentRoute);
router.use("/class", classRoute);
router.use("/monster", monsterRoute);

module.exports = router;
