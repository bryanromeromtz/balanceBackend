export const { express, Request, Response } = require("express");
export const apicache = require("apicache");

export const router = express.Router();
export const cache = apicache.middleware;

router.get("/", (req: Request, res: any) => {
  res.json({ message: "Welcome to the Workout Tracker API!" });
});
//   .get("/", cache("2 minutes"), getAllWorkouts)
//   .get("/:id", getWorkout)
//   .get("/:workoutId/records", getRecordsForWorkout)
//   .post("/", createWorkout)
//   .put("/:id", updateWorkout)
//   .delete("/:id", deleteWorkout);

module.exports = router;
