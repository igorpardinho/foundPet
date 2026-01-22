import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    id: text("id").primaryKey().notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    age: integer("age").notNull(),
    phone: text("phone").notNull(),
    address: text("address").notNull(),
    city: text("city").notNull(),
    state: text("state").notNull(),
    contacts: text("contacts").notNull(),
    first_pet: integer("first_pet", { mode: "boolean" }).notNull(),
    pet_budget: text("pet_budget").notNull(),
    photo: text("photo"),
    job: text("job").notNull(),
    routine: text("routine").notNull(),
});
