const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "college"
});

db.connect((err) => {
    if (err) {
        console.error("Failure: Could not connect to database.", err.message);
        return;
    }
    console.log("Success: Connected to MySQL database...");
});


function insertStudent(name, age, course, email, callback) {
    const query = 'INSERT INTO students (name, age, course, email) VALUES (?,?,?,?)';
    db.query(query, [name, age, course, email], (err, result) => {
        
        console.log(`Success: Inserted student "${name}" with ID ${result.insertId}`);
        if (callback) callback(null, result);
    });
}

function showAllStudents(callback) {
    const query = 'SELECT * FROM students';
    db.query(query, (err, results) => {
        if (err) {
            console.error("Failure: Could not retrieve students.", err.message);
            if (callback) callback(err);
            return;
        }
        console.log("\n--- All Student Records ---");
        if (results.length === 0) {
            console.log("No records found.");
        } else {
            console.table(results);
        }
        if (callback) callback(null, results);
    });
}

function searchStudent(searchTerm, callback) {
    const query = 'SELECT * FROM students WHERE id = ? OR name LIKE ?';
    db.query(query, [searchTerm, `%${searchTerm}%`], (err, results) => {
        if (err) {
            console.error("Failure: Search failed.", err.message);
            if (callback) callback(err);
            return;
        }
        console.log(`\n--- Search Results for "${searchTerm}" ---`);
        if (results.length === 0) {
            console.log("No matching students found.");
        } else {
            console.table(results);
        }
        if (callback) callback(null, results);
    });
}

function updateStudent(id, updates, callback) {
    const query = `
        UPDATE students 
        SET name = COALESCE(?, name), 
            age = COALESCE(?, age), 
            course = COALESCE(?, course), 
            email = COALESCE(?, email) 
        WHERE id = ?
    `;
    const values = [
        updates.name || null,
        updates.age || null,
        updates.course || null,
        updates.email || null,
        id
    ];
    
    db.query(query, values, (err, result) => {
        if (err) {
            console.error(`Failure: Could not update student ID ${id}.`, err.message);
            if (callback) callback(err);
            return;
        }
        if (result.affectedRows > 0) {
            console.log(`\nSuccess: Updated student ID ${id}`);
        } else {
            console.log(`\nFailure: No student found with ID ${id} to update.`);
        }
        if (callback) callback(null, result);
    });
}

function deleteStudent(id, callback) {
    const query = 'DELETE FROM students WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(`Failure: Could not delete student ID ${id}.`, err.message);
            if (callback) callback(err);
            return;
        }
        if (result.affectedRows > 0) {
            console.log(`\nSuccess: Deleted student ID ${id}`);
        } else {
            console.log(`\nFailure: No student found with ID ${id} to delete.`);
        }
        if (callback) callback(null, result);
    });
}

