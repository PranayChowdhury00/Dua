import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let dbPromise = null;

export async function openDB() {
  if (!dbPromise) {
    dbPromise = open({
      filename: './database/dua_main.sqlite',  // Make sure path is correct
      driver: sqlite3.Database,
    });
  }
  return dbPromise;
}
