"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let chordSchema = new mongoose_1.Schema({
    songID: Number,
    title: String,
    artist: String,
    chords: [String],
    content: [String]
});
let Chord = (0, mongoose_1.model)('Chord', chordSchema);
exports.default = Chord;
//# sourceMappingURL=chord.js.map