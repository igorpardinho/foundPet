import Elysia from "elysia";
import { OngService } from "./ong.service";
import { CreateOngDto, UpdateOngDto } from "./ong.dto";
import { PaginationQuery } from "../../utils/pagination.dto";
import { CreatePetDto } from "../pets/pet.dto";

const ongService = new OngService();
export const ongRoutes = new Elysia().group("/ongs", (app) => {
    return app
        .post(
            "",
            async ({ body, set }) => {
                set.status = 201;
                return await ongService.create(body);
            },
            {
                body: CreateOngDto,
            },
        )
        .get(
            "",
            async ({ query }) => {
                const { page, limit } = query;
                return await ongService.findAllPaginated(page, limit);
            },
            {
                query: PaginationQuery,
            },
        )
        .group("/:id", (app) =>
            app
                .get("", async ({ params }) => {
                    return await ongService.findById(params.id);
                })
                .patch(
                    "",
                    async ({ params, body }) => {
                        return await ongService.update(params.id, body);
                    },
                    {
                        body: UpdateOngDto,
                    },
                )
                .delete("", async ({ params, set }) => {
                    set.status = 204;
                    return await ongService.delete(params.id);
                })
                .post(
                    "/pets",
                    async ({ params, body, set }) => {
                        set.status = 201;
                        return await ongService.createPet(params.id, body);
                    },
                    {
                        body: CreatePetDto,
                    },
                )
                .get(
                    "/pets",
                    async ({ params, query }) => {
                        const { page, limit } = query;
                        return await ongService.findPetsForOng(
                            params.id,
                            page,
                            limit,
                        );
                    },
                    {
                        query: PaginationQuery,
                    },
                ),
        );
});
