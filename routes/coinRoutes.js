const { Router } = require("express");
const router = Router();
const coinController = require("../controllers/coinController");
router.get("/coins", coinController.fetchCoins);
router.get("/coin/:id", coinController.fetchCoinById);
router.get("/coins/:ids", coinController.fetchCoinByIds);
module.exports = router;
