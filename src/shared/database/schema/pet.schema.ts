import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { ongs } from "./ong.schema";
import { relations } from "drizzle-orm";

export const pets = sqliteTable("pets", {
  id: text("id").primaryKey().notNull(),
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
  ongId: text("ong_id")
    .notNull()
    .references(() => ongs.id, { onDelete: "cascade" }),
});

export const petRelations = relations(pets, ({ one }) => ({
  ong: one(ongs, {
    fields: [pets.ongId],
    references: [ongs.id],
  }),
}));
