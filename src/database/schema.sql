CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, content) VALUES
('my first note', 'A simple note about something'),
('my second note', 'A simple note about something else');