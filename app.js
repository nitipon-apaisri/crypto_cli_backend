require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 666;
const router = require("./routes");
const logger = require("./middlewares/logger");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router.coinRouter);
app.use(logger);
app.use(express.json());
const run = () => {
    app.listen(PORT, () => console.log("Server running on port " + PORT));
};
if (process.env.NODE_ENV !== "test") run();
module.exports = app;
