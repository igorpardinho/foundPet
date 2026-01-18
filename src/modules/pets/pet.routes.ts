import Elysia from "elysia";
import { PetService } from "./pet.service";
import { CreatePetDto, UpdatePetDto } from "./pet.dto";
import { PaginationQuery } from "../../utils/pagination.dto";

const petService = new PetService();

export const petRoutes = new Elysia().group("/pets", (app) => {
    return app
        .get(
            "",
            async ({ query }) => {
                return await petService.findAll(query.page, query.limit);
            },
            { query: PaginationQuery },
        )
        .post(
            "",
            async ({ body, set }) => {
                set.status = 201;
                return await petService.create(body);
            },
            {
                body: CreatePetDto,
            },
        )
        .get("/:id", async ({ params }) => {
            return await petService.findById(params.id);
        })
        .patch(
            "/:id",
            async ({ body, params }) => {
                return await petService.update(params.id, body);
            },
            {
                body: UpdatePetDto,
            },
        )
        .delete("/:id", async ({ set, params }) => {
            await petService.delete(params.id);
            set.status = 204;
            return;
        });
});
