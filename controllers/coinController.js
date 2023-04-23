const { getCoins } = require("../models/coinModel");

const fetchCoins = async (req, res) => {
    const data = await getCoins();
    res.json({ data: data });
};

module.exports = { fetchCoins };
