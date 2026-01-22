import { relations } from "drizzle-orm";
import { ongs } from "./schema/ong.schema";
import { pets } from "./schema/pet.schema";

export const ongRelations = relations(ongs, ({ many }) => ({
    pets: many(pets),
}));

export const petRelations = relations(pets, ({ one }) => ({
    ong: one(ongs, {
        fields: [pets.ongId],
        references: [ongs.id],
    }),
}));
