import express from "express";
import path from "path";
const app = express();
app.set("view engine", "ejs");
app.use(
  express.static(path.join(__dirname, "..", "/node_modules/bootstrap/dist/css"))
);
app.use(
  express.static(path.join(__dirname, "..", "/node_modules/bootstrap/dist/js"))
);
app.use(
  express.static(path.join(__dirname, "..", "/public"))
);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/index.html"));
});

app.listen(8080, () => {
  console.log(
    "\n================================================\nApp listening on port 8080\n================================================"
  );
});
