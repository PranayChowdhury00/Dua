import { openDB } from '@/app/lib/db';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const cat_id = searchParams.get('cat_id');

  if (!cat_id) {
    return new Response(JSON.stringify({ error: 'cat_id is required' }), {
      status: 400,
    });
  }

  try {
    const db = await openDB();
    const subcategories = await db.all(
      'SELECT * FROM sub_category WHERE cat_id = ?',
      [cat_id]
    );

    return new Response(JSON.stringify(subcategories), {
      status: 200,
    });
  } catch (err) {
    console.error('Error fetching subcategories:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch subcategories' }), {
      status: 500,
    });
  }
}
