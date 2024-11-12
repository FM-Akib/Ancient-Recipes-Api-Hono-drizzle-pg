import type { Context } from "hono";
import db from "../db/db.js";
import { era } from "../schema/schema.js";


export const getAllEras =async(c:Context)=>{
    try{
      const erasList = await db.select().from(era).execute();
      return c.json(erasList);
    }catch(error){
        console.error('Database error:', error);
        return c.json({ error: 'Failed to fetch eras' }, 500);
    }
}