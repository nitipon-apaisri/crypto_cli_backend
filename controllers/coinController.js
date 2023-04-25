const { getCoins, getCoinById } = require("../models/coinModel");

const fetchCoins = async (req, res) => {
    const data = await getCoins();
    res.json({ data: data });
};
const fetchCoinById = async (req, res) => {
    const id = req.params.id;
    const data = await getCoinById(id);
    res.json({ data: data });
};
module.exports = { fetchCoins, fetchCoinById };
