import { openDB } from "@/lib/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const cat_id = searchParams.get("cat_id");
    try {
        const db = await openDB();
        const query = cat_id
            ? `SELECT * FROM sub_category WHERE cat_id = ?`
            : `SELECT * FROM sub_category`;
        const params = cat_id ? [cat_id] : [];
        const subcategories = await db.all(query, params);
        return new Response(JSON.stringify({ subcategories }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("Error fetching subcategories:", err);
        return new Response(
            JSON.stringify({ error: "Error fetching subcategories" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}