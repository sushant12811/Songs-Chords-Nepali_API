import express from 'express';
const router = express.Router();
import { DisplayedChordsList } from '../Controller/chord';


/* GET home page. */
router.get('/', function(req, res, next) {DisplayedChordsList(req, res, next);});

export default router;