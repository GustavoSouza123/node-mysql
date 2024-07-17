import { db } from "../database/connection.js";

export const getNotes = (_req, res) => {
    const q = "SELECT * FROM notes";

    db.query(q, (err, data) => {
        if(err) {
            return res.json(err);
        }

        return res.status(200).json(data);
    });
}