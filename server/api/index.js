const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/exercise", require("./exercise"));
router.use("/workout", require("./workout"));
router.use("/leaders", require("./leaders"));
router.use("/presetworkouts", require("./presetWorkout"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
