import { db } from "../database/connection.js";

export const getNotes = (_req, res) => {
    const q = "SELECT * FROM notes";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    });
}

export const addNote = (req, res) => {
    const q = "INSERT INTO notes (title, content) VALUES (?)";

    const values = [
        req.body.title,
        req.body.content
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);
        return res.status(200).json("Note created successfully");
    })
}