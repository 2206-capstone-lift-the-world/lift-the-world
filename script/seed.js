const {
  db,
  models: { User, Exercise, Workout, Sprite },
} = require("../server/db");
const WorkoutList = require("../server/db/models/WorkoutList");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  // Creating Users
  const kyle = await User.create({
    username: "kyle",
    email: "kparki@email.com",
    password: "123",
    totalWeight: 0,
    level: 1,
    selectedSprite: "cat",
  });

  const nicole = await User.create({
    username: "nicky",
    email: "nicole@hong.com",
    password: "123",
    totalWeight: 0,
    level: 1,
    selectedSprite: "dog",
  });

  const cherry = await User.create({
    username: "cherry",
    email: "cherry@xu.com",
    password: "123",
    totalWeight: 0,
    level: 1,
    selectedSprite: "cat",
  });

  const ryan = await User.create({
    username: "ryan",
    email: "ryan@scoville.com",
    password: "123",
    totalWeight: 0,
    level: 1,
    selectedSprite: "dog",
  });

  // creating exercises for presets
  const chest1 = await Exercise.create({
    name: " Barbell Bench Press",
    category: "chest",
    equipment: ["Barbell", "Bench"],
    tipsAndTricks: [
      "Keep shoulders back",
      "Don't bounce off your chest",
      "Use a spotter if needed",
    ],
    embedId: "gRVjAtPip0Y",
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2289486/image_iphone.jpg",
  });

  const chest3 = await Exercise.create({
    name: "Dumbbell Fly",
    category: "chest",
    equipment: ["Dumbbells", "Bench"],
    tipsAndTricks: [
      "Lift arms above the head so they're extended but not locked",
      "Slight bend at your elbow, and palms and dumbbells should face each other",
      "Lower dumbbells in an arc motion until they're in line with the chest",
    ],
    embedId: "eozdVDA78K0",
    image: "https://www.burnthefatinnercircle.com/members/images/1804.jpg",
  });

  const chest4 = await Exercise.create({
    name: "Decline Bench Press",
    category: "chest",
    equipment: ["Press machine or decline bench"],
    tipsAndTricks: [
      "Keeps palms facing forward and arms slightly wider than shoulder-width apart",
      "Lower until bar touches your mid chest",
    ],
    embedId: "OR6WM5Z2Hqs",
    image:
      "https://static.strengthlevel.com/images/illustrations/decline-dumbbell-fly-1000x1000.jpg",
  });

  const chest6 = await Exercise.create({
    name: "Triceps Cable Pushdown",
    category: "triceps",
    equipment: ["Cable machine"],
    tipsAndTricks: [
      "Tilt torso at a 30-40 degree angle instead of standing straight up",
      "Use slow and controlled movements",
    ],
    embedId: "2-LAMcpzODU",
    image:
      "https://static.strengthlevel.com/images/illustrations/tricep-rope-pushdown-1000x1000.jpg",
  });

  const back1 = await Exercise.create({
    name: "Lat Pulldown",
    category: "back",
    equipment: ["Pulldown machine"],
    tipsAndTricks: [
      "Use slow and controlled movements",
      "Keep shoulders back",
      "Keep back straight",
    ],
    embedId: "Z_3xHwuO8Tk",
    image:
      "http://cdn.shopify.com/s/files/1/0250/0362/2496/articles/5f19b4eff633a10684ef6193_wide-grip-lat-pulldown-anabolic-aliens.png?v=1644918521",
  });

  const back2 = await Exercise.create({
    name: "Row",
    category: "back",
    equipment: ["Row machine"],
    tipsAndTricks: [
      "Don't pull the handle to your neck",
      "Don't lean back too far, you only want to be slightly behind vertical",
    ],
    embedId: "roCP6wCXPqo",
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2124438/image_iphone.jpg",
  });

  const back3 = await Exercise.create({
    name: "Bent Over Row",
    category: "back",
    equipment: ["Dumbbells or barbell"],
    tipsAndTricks: [
      "Keep palms facing down",
      "Lift barbell towards you while keepting torso stationary",
      "Lower barbell back to starting postition using slow and controlled movements",
    ],
    embedId: "FWJR5Ve8bnQ",
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2287167/image_iphone.jpg",
  });
  const back4 = await Exercise.create({
    name: "Shoulder Shrugs",
    category: "back",
    equipment: ["Dumbbells or barbell"],
    tipsAndTricks: [
      "Keep chin up, neck straight and face straight ahead",
      "Bring shoulders as high up towards your ears as you can",
      "Repeat using slow and controlled movements",
    ],
    embedId: "cJRVVxmytaM",
    image: "https://www.burnthefatinnercircle.com/members/images/1893.jpg",
  });

  const back5 = await Exercise.create({
    name: "Hammer Curl",
    category: "biceps",
    equipment: ["Dumbbells"],
    tipsAndTricks: [
      "Stand or kneel with legs about hips-width distance apart",
      "Lift weights to shoulders, keep shoulders down and back",
      "Move slow and controlled movements",
    ],
    embedId: "TwD-YGVP4Bk",
    image:
      "https://static.strengthlevel.com/images/illustrations/hammer-curl-1000x1000.jpg",
  });
  const back6 = await Exercise.create({
    name: "Preacher Curl",
    category: "biceps",
    equipment: ["Dumbbells or barbell", "Curling bench"],
    tipsAndTricks: [
      "Utilize full range of motion",
      "Move slow and controlled movements",
    ],
    embedId: "fIWP-FRFNU0",
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2453802/image_iphone.jpg",
  });
  const legs1 = await Exercise.create({
    name: "Squat",
    category: "glutes",
    equipment: ["Barbell", "Squat rack"],
    tipsAndTricks: [
      "Keep your back straight",
      "Push through your heels",
      "Don't lock your knees",
    ],
    embedId: "Dy28eq2PjcM",
    image:
      "https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg",
  });

  const legs2 = await Exercise.create({
    name: "Romanian Deadlift",
    category: "legs",
    equipment: ["Dumbbells or barbell"],
    tipsAndTricks: [
      "Stand with feet shoulder-width apart",
      "Push hips back and lower dumbbells while keeping legs straight or slightly bent",
    ],
    embedId: "7AaaYhMqTws",
    image:
      "http://cdn.shopify.com/s/files/1/0250/0362/2496/articles/5e595712f146e8e14db4ca6f_dumbbell-romanian-deadlift-exercise-anabolic-aliens-p-500.png?v=1644927440",
  });

  const legs3 = await Exercise.create({
    name: "Leg Curl",
    category: "legs",
    equipment: ["Leg curl machine"],
    tipsAndTricks: [
      "Maintain neutral spine - don't put your head too high or too low",
      "Use slow and controlled movements",
    ],
    embedId: "fK0uZ3KRZRI",
    image:
      "https://static.strengthlevel.com/images/illustrations/lying-leg-curl-1000x1000.jpg",
  });
  const legs4 = await Exercise.create({
    name: "Leg Extension",
    category: "legs",
    equipment: ["Leg extension machine"],
    tipsAndTricks: [
      "Concentrate on contracting your quads to move the weight rather than yanking your feet up",
      "Use slow and controlled movements",
    ],
    embedId: "8Jqof7z3QYM",
    image:
      "https://i.pinimg.com/originals/19/77/ae/1977aec3424113ef355b1b3bca2655bc.jpg",
  });

  const legs5 = await Exercise.create({
    name: "Bulgarian Split Squats",
    category: "glutes",
    equipment: ["Dumbbells or barbell", "Bench"],
    tipsAndTricks: [
      "Stand 2-3 feet in front of knee-high bench",
      "Keep torso upright, slowly lower knee towards floor",
      "Reverse the move and return to starting position",
    ],
    embedId: "HBYGeyb4sSM",
    image: "https://www.burnthefatinnercircle.com/members/images/1224.jpg",
  });

  const legs6 = await Exercise.create({
    name: "Leg Raises",
    category: "core",
    equipment: ["Floor mat"],
    tipsAndTricks: ["Engage your core", "Use controlled movements"],
    embedId: "JB2oyawG9KI",
    image:
      "https://fitnessprogramer.com/wp-content/uploads/2021/05/Captains-Chair-Leg-Raise.gif",
  });

  const barbellCurl = await Exercise.create({
    name: "Barbell Curl",
    category: "biceps",
    equipment: ["Barbell"],
    tipsAndTricks: [
      "Use controlled movements",
      "Use lower weight if you find yourself leaning back to assist",
    ],
    embedId: "dDI8ClxRS04",
    image:
      "https://static.strengthlevel.com/images/illustrations/barbell-curl-1000x1000.jpg",
  });

  const chinup = await Exercise.create({
    name: "Chin Up",
    category: "biceps",
    equipment: ["Chin up bar"],
    tipsAndTricks: [
      "Keep hands shoulder-width apart",
      "Use controlled movements",
    ],
    embedId: "brhRXlOhsAM",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-ba713d8fa1c44cd4b214fa1a6b32e094-pjlq",
  });

  const inclineDumbbellcurl = await Exercise.create({
    name: "Incline Dumbbell Curl",
    category: "biceps",
    equipment: ["Dumbbells", "Bench"],
    tipsAndTricks: [
      "Don't use momentum to lift the weights",
      "Use controlled movements",
    ],
    embedId: "soxrZlIl35U",
    image: "https://www.burnthefatinnercircle.com/members/images/1592.jpg",
  });

  const diamondPushups = await Exercise.create({
    name: "Diamond Pushups",
    category: "triceps",
    equipment: ["Floor mat"],
    tipsAndTricks: [
      "Put your hands in a diamond position",
      "Keep core tight and straight like a plank",
      "Use controlled movements",
    ],
    embedId: "J0DnG1_S92I",
    image:
      "https://www.aleanlife.com/wp-content/uploads/2021/01/diamond-push-up-form-1200x675.jpg",
  });

  const kickBacks = await Exercise.create({
    name: "Kickbacks",
    category: "triceps",
    equipment: ["Dumbbells", "Bench"],
    tipsAndTricks: [
      "Bend forward slightly at waist so torso is almost parallel to the floor",
      "Engage your core and keep head, neck and spine inline",
      "Use controlled movements",
    ],
    embedId: "ZO81bExngMI",
    image:
      "https://static.strengthlevel.com/images/illustrations/dumbbell-tricep-kickback-1000x1000.jpg",
  });

  const tricepsExtension = await Exercise.create({
    name: "Triceps Extension",
    category: "triceps",
    equipment: ["Dumbbell", "Bench"],
    tipsAndTricks: [
      "Slowly bend your elbows and lower the weight behind your head",
      "Keep trunk upright and core engaged",
      "The weight should follow the path of your spine",
    ],
    embedId: "nRiJVZDpdL0",
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2287384/image_iphone.jpg",
  });

  const frontSquat = await Exercise.create({
    name: "Front Squat",
    category: "glutes",
    equipment: ["Barbell", "Squat rack"],
    tipsAndTricks: [
      "Keep toes pointed slightly outwards and make sure knees track in the direction the toes point",
      "Keep chest up and elbows high",
    ],
    embedId: "wyDbagKS7Rg",
    image: "http://www.burnthefatinnercircle.com/members/images/1248.jpg",
  });

  const goodMorning = await Exercise.create({
    name: "Good Morning",
    category: "legs",
    equipment: ["Barbell"],
    tipsAndTricks: [
      "Keep hips back and knees slightly bent",
      "Lower torso until your spine is almost parallel to floor, maintaining a slight arch in lower back",
      "Keep core engaged, lift torso to return to starting positon",
    ],
    embedId: "vKPGe8zb2S4",
    image:
      "https://static.strengthlevel.com/images/illustrations/good-morning-1000x1000.jpg",
  });

  const lunge = await Exercise.create({
    name: "Lunge",
    category: "legs",
    equipment: ["Dumbbells or barbell"],
    tipsAndTricks: [
      "Lunge as far as required for your front knee to reach 90 degrees",
      "Use controlled movements",
    ],
    embedId: "QOVaHwm-Q6U",
    image: "https://www.burnthefatinnercircle.com/members/images/2012.png",
  });

  const forearmPlank = await Exercise.create({
    name: "Plank",
    category: "core",
    equipment: ["Floor mat"],
    tipsAndTricks: ["Activate your core", "Breathe through the exercise"],
    embedId: "pSHjTRCQxIw",
    image: "/images/ForearmPlank.png",
  });

  const russianTwist = await Exercise.create({
    name: "Russian Twist",
    category: "core",
    equipment: ["Kettlebell", "Floor mat"],
    tipsAndTricks: [
      "Twist as far as you can comfortably",
      "Use controlled movements",
    ],
    embedId: "wkD8rjkodUI",
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2287890/image_iphone.jpg",
  });

  const woodChop = await Exercise.create({
    name: "Half-Kneeling Wood Chop",
    category: "core",
    equipment: ["Dumbbell", "Kettlebell", "Floor mat"],
    tipsAndTricks: [
      "Keep feet on ground shoulder-width apart",
      "Use slow and controlled movements",
    ],
    embedId: "SfTBo2Tjl7M",
    image:
      "https://fitnessandhealthpromotion.ca/wp-content/uploads/2021/09/half-kneeling-woodchop.jpg",
  });

  const dips = await Exercise.create({
    name: "Dips",
    category: "chest",
    equipment: ["Dip rack or assisted dip machine"],
    tipsAndTricks: [
      "Don't go so far that you strain your shoulders",
      "Use controlled movements",
    ],
    embedId: "wjUmnZH528Y",
    image: "https://www.burnthefatinnercircle.com/members/images/1093.jpg",
  });

  const deadLift = await Exercise.create({
    name: "Deadlift",
    category: "back",
    equipment: ["Barbell", "squat rack"],
    tipsAndTricks: [
      "Keep your back straight",
      "Avoid jerking your back",
      "Use controlled movements",
    ],
    embedId: "-4qRntuXBSc",
    image:
      "https://static.strengthlevel.com/images/illustrations/deadlift-1000x1000.jpg",
  });

  const cableKickback = await Exercise.create({
    name: "Cable Kickback",
    category: "glutes",
    equipment: ["Cable machine", "Ankle fastener"],
    tipsAndTricks: [
      "Keep knees slightly bent",
      "Turning leg out going back can be helpful",
      "Use slow and controlled movements",
    ],
    embedId: "dJa_Nf4zdik&t=31s",
    image:
      "https://static.strengthlevel.com/images/illustrations/cable-kickback-1000x1000.jpg",
  });

  const stepDown = await Exercise.create({
    name: "Step Down",
    category: "glutes",
    equipment: ["Box or bench"],
    tipsAndTricks: [
      "Control body weight and keep balance",
      "Slowly move body down and keep body aligned",
    ],
    embedId: "Eerfi7WaiDE",
    image: "https://www.burnthefatinnercircle.com/members/images/2008.png",
  });

  const flatLegRaise = await Exercise.create({
    name: "Flat Leg Raise",
    category: "core",
    equipment: ["Floor mat"],
    tipsAndTricks: ["Keep core tight", "Slowly move legs down with control"],
    embedId: "BUq5RTDXeZ0",
    image: "/images/FlatLegRaises.png",
  });

  const flatKneeRaise = await Exercise.create({
    name: "Flat Knee Raise",
    category: "core",
    equipment: ["Floor mat"],
    tipsAndTricks: ["Keep core tight", "Slowly move legs with control"],
    embedId: "xqTh6NqbAtM",
    image: "/images/FlatKneeRaise.png",
  });

  const DumbbellShoulderPress = await Exercise.create({
    name: "Dumbbell Shoulder Press",
    category: "chest",
    equipment: ["Dumbbells", "Bench"],
    tipsAndTricks: [
      "Keep palms facing away from you",
      "Keep chest and core braced",
      "Press weights upwards until arms are straight and weights touch above your head",
    ],
    embedId: "qEwKCR5JCog",
    image: "/images/shoulderPress.png",
  });

  const DumbbellBenchPress = await Exercise.create({
    name: "Dumbbell Bench Press",
    category: "chest",
    equipment: ["Barbell", "Bench"],
    tipsAndTricks: [
      "Keep palms facing away from you",
      "Keep chest and core braced",
      "Press weights upwards until arms are straight and weights touch above your head",
    ],
    embedId: "5n9TlaoRD58",
    image: "/images/dumbbell-bench-press.png",
  });

  const cableCrossover = await Exercise.create({
    name: "Cable Crossover",
    category: "chest",
    equipment: ["Cable Machine"],
    tipsAndTricks: [
      "Set pully on both sides at mid-level",
      "Use full range of motion",
      "Keep elbows slightly bent",
    ],
    embedId: "taI4XduLpTk",
    image: "/images/cableCrossover.png",
  });

  const inclineDumbbellFly = await Exercise.create({
    name: "Incline Dumbbell Fly",
    category: "chest",
    equipment: ["Dumbbells", "Bench"],
    tipsAndTricks: [
      "Set bench at 30-45 degrees",
      "Turn wrist so palms are facing each other",
      "Lower until you feel a stretch in your pectorals",
    ],
    embedId: "bDaIL_zKbGs",
    image: "/images/inclineFly.png",
  });

  const landMinePress = await Exercise.create({
    name: "Landmine Press",
    category: "chest",
    equipment: ["Barbell"],
    tipsAndTricks: [
      "Wedge the end of a barbell into a corner",
      "Stagger your stance",
      "Press the bar above your head",
    ],
    embedId: "nDBKgITcI3I",
    image: "/images/landminePress.png",
  });

  const singleArmRow = await Exercise.create({
    name: "Single Arm Dumbbell Row",
    category: "back",
    equipment: ["Dumbbell", "Bench"],
    tipsAndTricks: [
      "Keep your feet square, and use one hand to stabalize yourself",
      "When you row, do not rotate your shoulders",
      "Slowly lower the weight back to starting position",
    ],
    embedId: "koP10y1qZI",
    image: "/images/DumbbellRow.png",
  });

  const pullover = await Exercise.create({
    name: "Pullover",
    category: "chest",
    equipment: ["Kettlebell or dumbbell", "Bench"],
    tipsAndTricks: [
      "Lie on your back and start with the weight above your head off the floor",
      "Bend your elbows only slightly",
      "Take a deep breath every time you lower the weight behind you",
    ],
    embedId: "zUVzVXMh9Nc",
    image: "/images/pullover.png",
  });

  const pschest1 = await Workout.create({
    name: "chest1",
    status: "active",
    isPreset: true,
  });

  const pschest2 = await Workout.create({
    name: "chest2",
    status: "active",
    isPreset: true,
  });

  const psback1 = await Workout.create({
    name: "back1",
    status: "active",
    isPreset: true,
  });

  const psback2 = await Workout.create({
    name: "back2",
    status: "active",
    isPreset: true,
  });

  const pslegs1 = await Workout.create({
    name: "legs1",
    status: "active",
    isPreset: true,
  });

  const pslegs2 = await Workout.create({
    name: "legs2",
    status: "active",
    isPreset: true,
  });

  const workout1 = await Workout.create({
    status: "closed",
    workoutTotalWeight: 500,
  });

  const workout2 = await Workout.create({
    status: "active",
    workoutTotalWeight: 500,
  });

  await pschest1.addExercises([chest1, chest3, chest5]);
  await pschest2.addExercises([chest3, chest4, chest6]);
  await psback1.addExercises([back1, back2, back5]);
  await psback2.addExercises([back3, back4, back6]);
  await pslegs1.addExercises([legs1, legs2, legs3]);
  await pslegs2.addExercises([legs4, legs5, legs6]);

  //creating our sprites
  const cat = await Sprite.create({
    name: "cat",
    isDefault: true,
  });
  const dog = await Sprite.create({
    name: "dog",
    isDefault: true,
  });
  const redHatBoy = await Sprite.create({
    name: "redHatBoy",
  });
  const cuteGirl = await Sprite.create({
    name: "cuteGirl",
  });
  const adventureBoy = await Sprite.create({
    name: "adventureBoy",
  });
  const zombie = await Sprite.create({
    name: "zombie",
  });
  const ninjaGirl = await Sprite.create({
    name: "ninjaGirl",
  });
  const jackOLantern = await Sprite.create({
    name: "jackOLantern",
  });
  const ninjaBoy = await Sprite.create({
    name: "ninjaBoy",
  });
  const adventureGirl = await Sprite.create({
    name: "adventureGirl",
  });
  const dino = await Sprite.create({
    name: "dino",
  });
  const robot = await Sprite.create({
    name: "robot",
  });
  const santa = await Sprite.create({
    name: "santa",
  });
  const knight = await Sprite.create({
    name: "knight",
  });

  await cherry.addSprite(cat);
  await cherry.addSprite(dog);
  await ryan.addSprite(cat);
  await ryan.addSprite(dog);
  await nicole.addSprite(cat);
  await nicole.addSprite(dog);
  await kyle.addSprite(cat);
  await kyle.addSprite(dog);

  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
