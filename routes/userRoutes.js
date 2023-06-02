const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth|| Post
router.post("/getUserData", authMiddleware, authController);

//Apply doctor|| Post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification doctor|| Post
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//get all doc
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//book appointment
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//booking availability
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

//apppointments list
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
