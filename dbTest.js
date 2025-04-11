// import path from "path";
// import { open } from "sqlite";
// import sqlite3 from "sqlite3";

// // Function to open the database
// export async function openDB() {
//     const dbPath = path.join(process.cwd(), "dua_main.sqlite");
//     return open({
//         filename: dbPath,
//         driver: sqlite3.Database,
//     });
// }

// // Function to test the connection and fetch data
// async function testDBConnection() {
//     try {
//         const db = await openDB();

//         // Step 1: Show all table names
//         const tables = await db.all("SELECT name FROM sqlite_master WHERE type='table'");
//         console.log("Tables in the database:", tables);

//         if (tables.length === 0) {
//             console.log("No tables found in the database.");
//             return;
//         }

//         // Step 2: Query the first table found (you can replace with a specific table name)
//         const tableName = tables[0].name; // or set manually: const tableName = "your_table_name";
//         const rows = await db.all(`SELECT * FROM ${tableName}`);
//         console.log(`Data from table '${tableName}':`, rows);
//     } catch (error) {
//         console.error("Error fetching data from database:", error);
//     }
// }

// // Run the test
// testDBConnection();
