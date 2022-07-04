const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css"))
);
app.use(
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js"))
);
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/index.html"));
});
app.get("/privacy", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/privacy.html"));
});

app.listen(8080, () => {
  console.log(
    "\n================================================\nApp listening on port 8080\n================================================"
  );
});
