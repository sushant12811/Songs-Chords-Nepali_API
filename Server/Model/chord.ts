import { Collection, Schema, model } from "mongoose";
import { Url } from "url";

//Structure-Data types- Interface
interface IChord 
{
    songID : number,
    title : string,
    artist : string,
    chords : string[],
    content : string[],
    chordImageURL : string[],
}

//Chord Schema - structure
let chordSchema = new Schema<IChord>
({
    songID : Number,
    title : String,
    artist : String,
    chords : [String],
    content : [String],
    chordImageURL:[String]

});

let Chord = model<IChord>('Chord', chordSchema);

export default Chord;