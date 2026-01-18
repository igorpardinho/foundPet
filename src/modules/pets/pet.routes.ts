import Elysia from "elysia";
import { PetService } from "./pet.service";
import { CreatePetDto, UpdatePetDto } from "./pet.dto";

const petService = new PetService();

export const petRoutes = new Elysia()
    .get("/pets", async ({ query }) => {
        const page =
            Number.isInteger(Number(query.page)) && Number(query.page) > 0
                ? Number(query.page)
                : 1;

        const limit =
            Number.isInteger(Number(query.limit)) && Number(query.limit) > 0
                ? Number(query.limit)
                : 10;
        return await petService.findAll(page, limit);
    })
    .post(
        "/pets",
        async ({ body }) => {
            return await petService.create(body);
        },
        {
            body: CreatePetDto,
        },
    )
    .get("/pets/:id", async ({ params }) => {
        return await petService.findById(params.id);
    })
    .patch(
        "/pets/:id",
        async ({ body, params }) => {
            return await petService.update(params.id, body);
        },
        {
            body: UpdatePetDto,
        },
    )
    .delete("/pets/:id", async ({ set, params }) => {
        await petService.delete(params.id);
        set.status = 204;
        return;
    });
