import { drizzle } from 'drizzle-orm/postgres-js';
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const DATABASE_URL = process.env.DATABASE_URL!;
// for migrations
// const migrationClient = postgres(POSTGRES_URL, { max: 1 });
// migrate(drizzle(migrationClient), ...)

// for query purposes
const queryClient = postgres(DATABASE_URL);
const db = drizzle(queryClient);
// await db.select().from(...)...

export {
    db
}