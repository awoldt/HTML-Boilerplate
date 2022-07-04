"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "/node_modules/bootstrap/dist/css")));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "/node_modules/bootstrap/dist/js")));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "/public")));
app.get("/", (req, res) => {
    res.status(200).sendFile(path_1.default.join(__dirname, "..", "/index.html"));
});
app.get('/privacy', (req, res) => {
    res.status(200).sendFile(path_1.default.join(__dirname, "..", "/privacy.html"));
});
app.listen(8080, () => {
    console.log("\n================================================\nApp listening on port 8080\n================================================");
});
