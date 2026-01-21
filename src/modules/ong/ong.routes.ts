import Elysia from "elysia";
import { OngService } from "./ong.service";
import { CreateOngDto } from "./ong.dto";

const ongService = new OngService();
export const ongRoutes = new Elysia().group("/ongs", (app) => {
    return app.post(
        "",
        async ({ body }) => {
            return await ongService.create(body);
        },
        {
            body: CreateOngDto,
        },
    );
});
