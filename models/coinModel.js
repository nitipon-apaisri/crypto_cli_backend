const dummy_data = require("../data/dummy_data.json");
const getCoins = async () => {
    const res = await fetch("https://api.coincap.io/v2/assets?limit=10", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.COINCAP_API_KEY}`,
        },
    });
    const data = await res.json();
    return data;
};

module.exports = { getCoins };
