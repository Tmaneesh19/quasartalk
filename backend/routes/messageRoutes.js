const express = require("express");
const {
  allMessages,
  sendMessage,
  deleteMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);
router.route("/:messageId").delete(protect, deleteMessage);

module.exports = router;
