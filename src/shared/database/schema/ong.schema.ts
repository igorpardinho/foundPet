import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const ongs = sqliteTable("ongs", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    cnpj: text("cnpj").notNull(),
    city:text("city").notNull(),
    phone: text("phone").notNull(),
    email: text("email").notNull(),
    size: text("size").notNull(),
    pre_interview: integer("pre_interview", { mode: "boolean" }),
});
