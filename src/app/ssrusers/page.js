async function getData() {
    const res = await fetch('https://dummyjson.com/users', {
        cache: 'no-store', // Important for SSR
    });
    return res.json();
}

export default async function Home() {
    const { users } = await getData();

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">SSR Users List</h1>
            <ul className="space-y-2">
                {users.map(post => (
                    <li key={post.id} className="pl-3 rounded shadow">
                        {post.firstName + ' ' + post.lastName}
                    </li>
                ))}
            </ul>
        </main>
    );
}