import clientPromise from "@/lib/connection";

export default async function Home() {
    const client = await clientPromise;
    const db = client.db('MSH_CONTACTAPP');
    const posts = await db.collection('Class').find({ IsAccessible: true }).toArray();

    return (
        <main className="p-4">
            <h1 className="text-xl font-bold mb-2">Class List</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>{post.classname}</li>
                ))}
            </ul>
        </main>
    );
}
