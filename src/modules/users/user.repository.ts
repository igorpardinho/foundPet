import { eq, sql } from "drizzle-orm";
import { db } from "../../shared/database/drizzle";
import { users } from "../../shared/database/schema/user.schema";
import { CreateUserInput, UpdateUserInput } from "./user.dto";

export class UserRepository {
    async create(data: CreateUserInput) {
        const id = crypto.randomUUID();
        const user = await db.insert(users).values({
            id,
            name: data.name,
            email: data.email,
            password: data.password,
            age: data.age,
            phone: data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            contacts: data.contacts,
            first_pet: data.first_pet,
            pet_budget: data.pet_budget,
            photo: data.photo ?? null,
            job: data.job,
            routine: data.routine,
        });
        return user;
    }

    async findAllPaginated(page: number, limit: number) {
        const offset = (page - 1) * limit;
        const usersList = await db
            .select()
            .from(users)
            .limit(limit)
            .offset(offset)
            .all();

        const total = await db
            .select({ count: sql<number>`count(*)` })
            .from(users)
            .get();

        return {
            data: usersList,
            page,
            limit,
            total: total?.count ?? 0,
            totalPages: Math.ceil(total?.count ?? 0 / limit),
        };
    }

    async findById(id: string) {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user;
    }

    async findByEmail(email: string) {
        const [userEmail] = await db
            .select()
            .from(users)
            .where(eq(users.email, email));
        return userEmail;
    }

    async update(id: string, data: UpdateUserInput) {
        const [updatedUser] = await db
            .update(users)
            .set(data)
            .where(eq(users.id, id))
            .returning();
        return updatedUser;
    }

    async delete(id: string) {
        await db.delete(users).where(eq(users.id, id));
    }
}
