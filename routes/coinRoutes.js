const { Router } = require("express");
const router = Router();
const coinController = require("../controllers/coinController");
router.get("/coins", coinController.fetchCoins);
router.get("/coins/:id", coinController.fetchCoinById);
module.exports = router;
