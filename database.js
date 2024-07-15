import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'notes_app'
});

try {
    const result = await connection.query(
        "SELECT * FROM notes"
    );
    
    console.log(result);
} catch(err) {
    console.log(err);
}