const router = require("express").Router();

const homeRoute = require("./homeroute");
const apiRoute = require("./api");

router.use("/", homeRoute);
router.use("/api", apiRoute);

module.exports = router;
