import { NextResponse } from 'next/server';
import path from 'path';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function openDB() {
  const dbPath = path.join(process.cwd(), 'dua_main.sqlite');
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
}

export async function GET() {
  const db = await openDB();
  const duas = await db.all('SELECT * FROM dua'); // Replace with your actual table name
  return NextResponse.json(duas);
}
