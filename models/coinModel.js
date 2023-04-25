const axios = require("axios");
const getCoins = async () => {
    const res = await axios.get("https://api.coincap.io/v2/assets?limit=10", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.COINCAP_API_KEY}`,
        },
    });
    return res.data;
};
const getCoinById = async (id) => {
    const res = await axios.get(`https://api.coincap.io/v2/assets/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.COINCAP_API_KEY}`,
        },
    });
    return res.data;
};

module.exports = { getCoins, getCoinById };
