import { Collection, Schema, model } from "mongoose";
import { Url } from "url";

//Structure-Data types- Interface

interface chordImages{
    imageUrl :string[]
}

interface IChord 
{
    songID : number,
    title : string,
    artist : string,
    chords : string[],
    chordImageUrl: chordImages,
    content : string[]
}

//Chord Schema - structure
let chordSchema = new Schema<IChord>
({
    songID : Number,
    title : String,
    artist : String,
    chords : [String],
    chordImageUrl:
    [
        {
            imageUrl: [String]
        }

    ],
    content : [String]

});

let Chord = model<IChord>('Chord', chordSchema);

export default Chord;