import db from "../db/db.js";
import { usersTable } from "../schema/schema.js";
export async function getAllUsers(c) {
    try {
        const users = await db.select().from(usersTable);
        return c.json(users);
    }
    catch (error) {
        console.error('Database error:', error);
        return c.json({ error: 'Failed to fetch users' }, 500);
    }
}
export async function postAUser(c) {
    try {
        const body = await c.req.json();
        const user = await db.insert(usersTable).values(body).returning();
        return c.json(user);
    }
    catch (error) {
        console.error('Database error:', error);
        return c.json({ error: 'Failed to post users' }, 500);
    }
}
