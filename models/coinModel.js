const dummy_data = require("../data/dummy_data.json");
const getCoins = async () => {
    // const res = await fetch("https://api.coinranking.com/v2/coins", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "x-access-token": "process.env.COINRANKING_API_KEY",
    //     },
    // });
    // const data = await res.json();

    // const data = await fetch(dummy_data)
    //     .then((res) => res.json())
    //     .catch((err) => console.log(err));

    return dummy_data;
};

module.exports = { getCoins };
