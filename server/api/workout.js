const router = require("express").Router();
const {
  models: { Workout, Exercise, WorkoutList, User, Sprite },
} = require("../db/");
const { requireToken } = require("./middleware");

router.get("/", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise],
    });
    res.send(workout);
  } catch (error) {
    next(error);
  }
});

router.get("/all", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findAll({
      where: {
        userId: req.user.dataValues.id,
      },
      include: [Exercise],
    });
    res.send(workout);
  } catch (error) {
    next(error);
  }
});

// router.get('/previous', requireToken, async (req, res, next) => {
//   try {
//     const workout = await Workout.findOne({
//       where: {
//         userId: req.user.dataValues.id,
//         status: 'closed',
//       },
//       order: [ [ 'createdAt', 'DESC' ]],
//       include: [Exercise],

//     });
//     res.send(workout);
//   } catch (error) {
//     next(error);
//   }
// });

router.put("/finish", requireToken, async (req, res, next) => {
  try {
    const current = await Workout.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise],
    });
    console.log("current workout finish", current);
    current.update({
      status: "closed",
    });

    res.send(current);
  } catch (error) {
    next(error);
  }
});

router.post("/", requireToken, async (req, res, next) => {
  try {
    const [workout, workoutCreated] = await Workout.findOrCreate({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise],
    });

    const [exercise, exerciseCreated] = await WorkoutList.findOrCreate({
      where: {
        exerciseId: req.body.exerciseId,
        workoutId: workout.id,
      },
    });
    exercise.userId = req.user.dataValues.id;
    exercise.sets = [{ reps: "", weight: "", setId: 0 }];
    await exercise.save();

    res.send(workout);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/add", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise]
    })

    if (!workout) {
      let preset = await Workout.findOne({
        where: {
          id: req.params.id
        },
        raw: true
      })

      preset.status = "active"
      preset.userId = req.user.dataValues.id
      delete preset.id;
      let newWorkout = await Workout.create(preset)

      const workoutLists = await WorkoutList.findAll({
        where: {
          workoutId: req.params.id,
        }
      })
      
      const exercises = workoutLists.map(workoutlist => {
        return workoutlist.dataValues.exerciseId
      })

      for (let i = 0; i < exercises.length; i++) {
        const exercise = await Exercise.findByPk(exercises[i]);
        await newWorkout.addExercise(exercise)
      }
      
      res.send(newWorkout)
    } else {
      console.log('FINISH THE WORKOUT THAT YOU STARTED!!!')
      res.send(workout)
    }
  } catch (error) {
    next (error)
  }
})

router.get("/preset", async (req, res, next) => {
  try {
    const workouts = await Workout.findAll({
      where: {
        isPreset: true,
      },
      include: [{ model: Exercise }],
    });
    res.send(workouts);
  } catch (error) {
    next(error);
  }
});

router.get("/preset/:id", async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(req.params.id, {
      where: {
        isPreset: true,
      },
      include: [{ model: Exercise }],
    });
    if (workout.isPreset) {
      res.send(workout);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
