'use client';

import { useEffect, useState } from "react";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async function getData() {
            // const res = await fetch('https://dummyjson.com/users', {
            const res = await fetch('/api/getdata', {
                cache: 'no-store',
            });
            const data = await res.json();
            setUsers(data);
            // setUsers(data.users);
        })();
    }, [])

    if (!users?.length) return <div>Loading..</div>

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">CSR Users List</h1>
            <ul className="space-y-2">
                {users.map(post => (
                    <li key={post._id} className="pl-3 rounded shadow">
                        {post.username + ', ' + post.email}
                    </li>
                ))}
            </ul>
        </main>
    );
}
