import db from "../db/db.js";
import { recipes } from "../schema/schema.js";
import { and, arrayContains, eq } from "drizzle-orm";
// GET /recipes?region=Ancient%20Egypt&ingredient=honey&limit=10&page=1
export const getAllRecipes = async (c) => {
    try {
        const { region, era, ingredients, limit = 10, page = 1 } = c.req.query();
        const conditions = [];
        if (region)
            conditions.push(eq(recipes.region, region));
        if (era)
            conditions.push(eq(recipes.era, era));
        if (ingredients)
            conditions.push(arrayContains(recipes.ingredients, ingredients.split(',')));
        const query = db.select().from(recipes)
            .where(and(...conditions))
            .limit(Number(limit))
            .offset((Number(page) - 1) * Number(limit));
        const results = await query.execute();
        return c.json({
            total: results.length,
            page: Number(page),
            pageSize: Number(limit),
            recipes: results,
        });
    }
    catch (error) {
        console.error('Database error:', error);
        return c.json({ error: 'Failed to fetch recipes' }, 500);
    }
};
export const getARecipe = async (c) => {
    try {
        const id = parseInt(c.req.param('id'));
        const recipe = await db.select().from(recipes).where(eq(recipes.id, id)).execute();
        if (!recipe)
            return c.json({ error: 'Recipe not found' }, 404);
        return c.json(recipe);
    }
    catch (error) {
        console.error('Database error:', error);
        return c.json({ error: 'Failed to post recipes' }, 500);
    }
};
export const postARecipe = async (c) => {
    try {
        const body = await c.req.json();
        const result = await db.insert(recipes).values(body).returning({ name: recipes.name }).execute();
        return c.json(result);
    }
    catch (error) {
        console.error('Database error:', error);
        return c.json({ error: 'Failed to post recipes' }, 500);
    }
};
export const updateARecipe = async (c) => {
    try {
        const id = parseInt(c.req.param('id'));
        const data = await c.req.json();
        const updatedRecipe = await db.update(recipes).set(data).where(eq(recipes.id, id)).returning().execute();
        return c.json({
            message: 'Recipe updated successfully',
            updatedRecipe
        });
    }
    catch (error) {
        console.error('Database error:', error);
        return c.json({ error: 'Failed to update recipes' }, 500);
    }
};
export const deleteARecipe = async (c) => {
    try {
        const id = parseInt(c.req.param('id'));
        const deletedRecipe = await db.delete(recipes).where(eq(recipes.id, id)).returning().execute();
        return c.json({
            message: 'Recipe deleted successfully',
            deletedRecipe
        });
    }
    catch (error) {
        console.error('Database error:', error);
        return c.json({ error: 'Failed to delete recipes' }, 500);
    }
};
