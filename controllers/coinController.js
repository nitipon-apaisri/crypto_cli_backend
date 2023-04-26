const { getCoins, getCoinById, getCoinByIds } = require("../models/coinModel");

const fetchCoins = async (req, res) => {
    const data = await getCoins();
    res.json({ data: data });
};
const fetchCoinById = async (req, res) => {
    const id = req.params.id;
    const data = await getCoinById(id);
    res.json({ data: data });
};
const fetchCoinByIds = async (req, res) => {
    const ids = req.params.ids;
    const data = await getCoinByIds(ids);
    res.json({ data: data });
};
module.exports = { fetchCoins, fetchCoinById, fetchCoinByIds };
