import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { getAllUsers, postAUser } from './controllers/userControllers.js'
import { deleteARecipe, getAllRecipes, getARecipe, postARecipe, updateARecipe } from './controllers/recipesControllers.js'
import { getAllRegions } from './controllers/regionsControllers.js'
import { getAllEras } from './controllers/eraControllers.js'

const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello Ancient Recipes API!')
})

app.get('/users',getAllUsers );
app.post('/users',postAUser);

app.get('/recipes',getAllRecipes);
app.get('/recipes/:id',getARecipe);
app.post('/recipes',postARecipe);
app.put('/recipes/:id',updateARecipe);
app.delete('/recipes/:id',deleteARecipe);

app.get('/regions',getAllRegions);
app.get('/era',getAllEras);




const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
export default app;
