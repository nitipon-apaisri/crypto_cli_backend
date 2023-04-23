const { Router } = require("express");
const router = Router();
const coinController = require("../controllers/coinController");
router.get("/coins", coinController.fetchCoins);
module.exports = router;
