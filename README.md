# Ancient Recipes API Documentation 🚀

The Ancient Recipes API can be a fascinating project, combining historical information with culinary inspiration. Here's a detailed breakdown of how you could structure this API from scratch, covering routes, request and response data, and search options.

---

## Overview of Routes

1. **GET /recipes** - Fetch a list of all recipes with optional filters and pagination.
2. **GET /recipes/:id** - Fetch a specific recipe by its unique ID.
3. **POST /recipes** - Add a new recipe (protected route if you want to limit access).
4. **PUT /recipes/:id** - Update an existing recipe by ID (protected route).
5. **DELETE /recipes/:id** - Delete a recipe by ID (protected route).
6. **GET /regions** - Get a list of all regions (e.g., Ancient Egypt, Medieval Europe) for filtering.
7. **GET /eras** - Get a list of historical eras (e.g., Bronze Age, Middle Ages) for filtering.
8. **GET /ingredients** - Search recipes based on ingredients.
---

## Example Request:

### Base Url

-  `[baseurl](https://ancient-recipes-nc8nbtyl4-motimiya08s-projects.vercel.app/)`. <br/>
https://ancient-recipes-nc8nbtyl4-motimiya08s-projects.vercel.app
 <br/>
GET /recipes?region=Ancient%20Egypt&ingredient=honey&limit=10&page=1

```bash
{
  "total": 125,
  "page": 1,
  "pageSize": 10,
  "recipes": [
    {
      "id": "1",
      "name": "Honey-Glazed Dates",
      "region": "Ancient Egypt",
      "era": "Bronze Age",
      "ingredients": ["dates", "honey", "spices"],
      "instructions": "Mix honey and dates, then glaze with spices. Roast lightly over a fire.",
      "historicalBackground": "This dessert was commonly enjoyed in the Bronze Age in Ancient Egypt."
    }
  ]
}

```
# GET /recipes/1

```bash
{
  "id": "1",
  "name": "Honey-Glazed Dates",
  "region": "Ancient Egypt",
  "era": "Bronze Age",
  "ingredients": ["dates", "honey", "spices"],
  "instructions": "Mix honey and dates, then glaze with spices. Roast lightly over a fire.",
  "historicalBackground": "This dessert was commonly enjoyed in the Bronze Age in Ancient Egypt."
}

```

