const dotEnv = require("dotenv/config");
const express = require("express");
const cors = require("cors");
const apicache = require("apicache");
const app = express();
const PORT = process.env.PORT || 3030;
const cache = apicache.middleware;
const v1UserRouter = require("./v1/routes/userRoutes");

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(cache("2 minutes"));
app.use("/api/v1/users", v1UserRouter);

app.listen(PORT, () => {
  console.log(`🔥🚀🔥 Server is up on port ${PORT}`);
});
