import clientPromise from "@/lib/connection";

export async function GET() {
    const client = await clientPromise;
    const db = client.db('MSH_CONTACTAPP');
    const posts = await db.collection('User').find({ IsAccessible: true }).toArray();

    return Response.json(posts);
}
