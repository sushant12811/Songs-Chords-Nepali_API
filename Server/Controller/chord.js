"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayedChordsList = void 0;
const chord_1 = __importDefault(require("../Model/chord"));
function DisplayedChordsList(req, res, next) {
    chord_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Chord list are retrieved and Displayed", data: data });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.DisplayedChordsList = DisplayedChordsList;
//# sourceMappingURL=chord.js.map