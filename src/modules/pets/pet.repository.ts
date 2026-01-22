import { db } from "../../shared/database/drizzle";
import { pets } from "../../shared/database/schema/pet.schema";
import { eq, sql } from "drizzle-orm";
import { CreatePetInput, UpdatePetInput } from "./pet.dto";

export class PetRepository {
    

    async findAllPaginated(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        const petsList = await db
            .select()
            .from(pets)
            .limit(limit)
            .offset(offset)
            .all();

        const total = await db
            .select({ count: sql<number>`count(*)` })
            .from(pets)
            .get();

        return {
            data: petsList,
            page,
            limit,
            total: total?.count ?? 0,
            totalPages: Math.ceil((total?.count ?? 0) / limit),
        };
    }

    async findById(id: string) {
        const [pet] = await db.select().from(pets).where(eq(pets.id, id));
        return pet;
    }

    async update(id: string, data: UpdatePetInput) {
        const [updatedPet] = await db
            .update(pets)
            .set(data)
            .where(eq(pets.id, id))
            .returning();
        return updatedPet;
    }

    async delete(id: string) {
        await db.delete(pets).where(eq(pets.id, id));
    }
}
