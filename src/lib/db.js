import path from "path";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

export async function openDB() {
    const dbPath = path.join(process.cwd(), "dua_main.sqlite");
    return open({
        filename: dbPath,
        driver: sqlite3.Database,
    });
}
