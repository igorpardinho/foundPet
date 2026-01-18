import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const pets = sqliteTable("pets", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    species: text("species").notNull(),
    photo: text("photo"),
    age: integer("age").notNull(),
    gender: text("gender").notNull(),
    weight: integer("weight").notNull(),
    behavior: text("behavior").notNull(),
    vaccine: text("vaccine").notNull(),
    castration: integer("castration", { mode: "boolean" }).notNull(),
    comorbidities: text("comorbidities").notNull(),
    accompanied: integer("accompanied", { mode: "boolean" }).notNull(),
    city: text("city").notNull(),
});
