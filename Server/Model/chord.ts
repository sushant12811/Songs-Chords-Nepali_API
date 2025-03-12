import { Collection, Schema, model } from "mongoose";

//Structure-Data types- Interface
interface IChord 
{
    songID : number,
    title : string,
    artist : string,
    chords : string[],
    content : string[]
}

//Chord Schema - structure
let chordSchema = new Schema<IChord>
({
    songID : Number,
    title : String,
    artist : String,
    chords : [String],
    content : [String]

});

let Chord = model<IChord>('Chord', chordSchema);

export default Chord;