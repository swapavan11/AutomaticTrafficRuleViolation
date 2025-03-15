const express = require("express");
const router = express.Router();

const {
  handleUpload,
  handleGetAllChallans,
  getChallanByVehicleNumber,
} = require("../controllers/upload.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", handleGetAllChallans);
router.get("/:vehicleNo", getChallanByVehicleNumber);
router.post("/upload", upload.single("data"), handleUpload);

module.exports = router;
