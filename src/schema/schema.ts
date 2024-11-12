import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const recipes = pgTable("recipes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name",{length: 255}).notNull(),
  region: varchar("region",{length: 255}).references(()=>regions.name),
  era: varchar("era",{length:255}).references(()=>era.name),
  ingredients: text("ingredients").array().notNull(),
  instructions: text("instructions").notNull(),
  historicalBackground: text("historicalBackground").notNull(),
  imgUrl: varchar("imgUrl",{length: 255}).notNull()
})

export const regions = pgTable('regions',{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name",{length: 255}).notNull()
})

export const era = pgTable('era',{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name",{length: 255}).unique().notNull()
})