"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const chord_1 = require("../Controller/chord");
router.get('/', function (req, res, next) { (0, chord_1.DisplayedChordsList)(req, res, next); });
exports.default = router;
//# sourceMappingURL=index.js.map