import express from "express";
import { getNotes, addNote, updateNote, deleteNote } from "../controllers/note.js";

const router = express.Router();

router.get('/', getNotes);
router.post('/', addNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote)

export default router;