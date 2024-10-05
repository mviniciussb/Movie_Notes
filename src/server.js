const serverConnection = require("./database/knex/index");
const routes = require("./routes/index");
const express = require("express");
const app = express();

app.use(express.json());
app.use(routes);

serverConnection()

const PORT = 5555;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}.`));
