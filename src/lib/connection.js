import { MongoClient } from 'mongodb';

const uri = process.env.DB_STRING;
const options = {};

let client;
let clientPromise;

if (!process.env.DB_STRING) {
    throw new Error('Please define the DB_STRING environment variable');
}

if (process.env.NODE_ENV === 'development') {
    // Reuse client in dev (hot-reload safe)
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // Create new client in production
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;