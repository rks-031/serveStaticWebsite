const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");
//middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello from the express server");
});

app.listen(port, () => {
  console.log(`listening to  the port ${port}`);
});
