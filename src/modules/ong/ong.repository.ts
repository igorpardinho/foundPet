import { eq, sql } from "drizzle-orm";
import { db } from "../../shared/database/drizzle";
import { ongs } from "../../shared/database/schema/ong.schema";
import { CreateOngInput, UpdateOngInput } from "./ong.dto";

export class OngRepository {
    async create(data: CreateOngInput) {
        const id = crypto.randomUUID();
        const ong = await db.insert(ongs).values({
            id,
            name: data.name,
            cnpj: data.cnpj,
            city: data.city,
            phone: data.phone,
            email: data.email,
            size: data.size,
            pre_interview: data.pre_interview,
        });

        return ong;
    }

    async findAllPaginated(page: number, limit: number) {
        const offset = (page - 1) * limit;
        const ongList = await db
            .select()
            .from(ongs)
            .limit(limit)
            .offset(offset)
            .all();

        const total = await db
            .select({ count: sql<number>`count(*)` })
            .from(ongs)
            .get();

        return {
            data: ongList,
            page: page,
            limit: limit,
            total: total?.count ?? 0,
            totalPages: Math.ceil(total?.count ?? 0 / limit),
        };
    }

    async findById(id: string) {
        const [ong] = await db.select().from(ongs).where(eq(ongs.id, id));
        return ong;
    }

    async update(id: string, data: UpdateOngInput) {
        const [ong] = await db
            .update(ongs)
            .set(data)
            .where(eq(ongs.id, id))
            .returning();

        return ong;
    }

    async delete(id: string) {
        await db.delete(ongs).where(eq(ongs.id, id));
    }
}
