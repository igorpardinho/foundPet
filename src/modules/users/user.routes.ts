import Elysia from "elysia";
import { UserService } from "./user.service";
import { CreateUserDto, CreateUserInput, UpdateUserDto } from "./user.dto";
import { PaginationQuery } from "../../utils/pagination.dto";
import { FindByEmailQuery } from "../../utils/findByEmail.dto";

const userService = new UserService();
export const userRoutes = new Elysia().group("/users", (app) => {
    return app
        .get(
            "",
            async ({ query }) => {
                return await userService.findAllPaginated(
                    query.page,
                    query.limit,
                );
            },
            { query: PaginationQuery },
        )
        .post(
            "",
            async ({ set, body }) => {
                set.status = 201;
                return await userService.create(body);
            },
            {
                body: CreateUserDto,
            },
        )

        .get("/:id", async ({ params }) => {
            return await userService.findById(params.id);
        })
        .get(
            "/by-email",
            async ({ query }) => {
                return await userService.findByEmail(query.email);
            },
            { query: FindByEmailQuery },
        )
        .patch(
            "/:id",
            async ({ params, body }) => {
                return await userService.update(params.id, body);
            },
            { body: UpdateUserDto },
        )
        .delete("/:id", async ({ params, set }) => {
            await userService.delete(params.id);
            set.status = 204;
            return;
        });
});
