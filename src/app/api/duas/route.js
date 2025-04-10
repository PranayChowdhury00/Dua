import { openDB } from '@/app/lib/db';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const cat_id = searchParams.get('cat_id');
  const subcat_id = searchParams.get('subcat_id');

  try {
    const db = await openDB();
    let query = 'SELECT * FROM dua';
    const conditions = [];
    const params = [];

    if (cat_id) {
      conditions.push('cat_id = ?');
      params.push(cat_id);
    }

    if (subcat_id) {
      conditions.push('subcat_id = ?');
      params.push(subcat_id);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    const duas = await db.all(query, params);
    return new Response(JSON.stringify(duas), {
      status: 200,
    });
  } catch (err) {
    console.error('Error fetching duas:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch duas' }), {
      status: 500,
    });
  }
}
