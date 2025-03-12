import { Request, Response, NextFunction } from "express";
import Chord from "../Model/chord";


/**
 * This function displays the movie list in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */

export function DisplayedChordsList (req:Request, res:Response, next:NextFunction): void {
    Chord.find({})
    .then((data) =>
    {
        res.status(200).json({success: true, msg: "Chord list are retrieved and Displayed", data: data})
    })
    .catch((err)=>
    {
        console.error(err);
    })
}
