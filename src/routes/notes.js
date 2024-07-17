import express from "express";
import { addNote, getNotes } from "../controllers/note.js";

const router = express.Router();

router.get('/', getNotes);
router.post('/', addNote);

export default router;