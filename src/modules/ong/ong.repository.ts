import { sql } from "drizzle-orm";
import { db } from "../../shared/database/drizzle";
import { ongs } from "../../shared/database/schema/ong.schema";
import { CreateOngInput } from "./ong.dto";

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
        await db.select().from(ongs).limit(limit).offset(offset).all();

        const total = await db
            .select({ count: sql<number>`count(*)` })
            .from(ongs)
            .get();
    }
}
