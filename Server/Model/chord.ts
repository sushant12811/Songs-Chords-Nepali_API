import { Collection, Schema, model } from "mongoose";

//Structure-Data types- Interface
interface IChords 
{
    songID : number,
    title : string,
    artist : string,
    chords : string[],
    content : string[]
}

//Chord Schema - structure
let chordSchema = new Schema<IChords>
({
    songID : Number,
    title : String,
    artist : String,
    chords : [String],
    content : [String]

})

let Chord = model<IChords>('Chord', chordSchema);

export default Chord;