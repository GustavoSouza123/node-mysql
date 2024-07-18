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

    if(values.some(value => value == '')) {
        return res.json({ error: "Required values must not be empty" });
    }

    db.query(q, [values], (err) => {
        if(err) return res.json(err);
        return res.status(200).json("Note created successfully");
    })
}

export const updateNote = (req, res) => {
    const q = "UPDATE notes SET title = ?, content = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.content
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);
        return res.status(200).json("Note updated successfully");
    });
}

export const deleteNote = (req, res) => {
    const q = "DELETE FROM notes WHERE id = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);
        return res.status(200).json("Note deleted successfully");
    });
}