import db from "../db/db.js";
import { regions } from "../schema/schema.js";
export const getAllRegions = async (c) => {
    try {
        const regionsList = await db.select().from(regions).execute();
        return c.json(regionsList);
    }
    catch (error) {
        console.error('Database error:', error);
        return c.json({ error: 'Failed to fetch regions' }, 500);
    }
};
