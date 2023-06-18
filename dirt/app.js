"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const index_router_1 = require("./routes/index.router");
const gbKay_1 = require("./config/gbKay");
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
new index_router_1.routes(router);
app.use("/project/suliya-auto", router);
app.use("/project/suliya-auto/test", (req, res) => {
    res.status(200).json({ message: 'connected api.' });
});
app.listen(gbKay_1.PORT, () => console.log(`server is running on port ${gbKay_1.PORT}`));
