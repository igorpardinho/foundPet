import Elysia from "elysia";
import { healthRoutes } from "./modules/health/health.routes";
import openapi from "@elysiajs/openapi";
import { petRoutes } from "./modules/pets/pet.routes";
import { userRoutes } from "./modules/users/user.routes";
import { errorHandler } from "./shared/plugins/error-handler";
import { ongRoutes } from "./modules/ong/ong.routes";

export const app = new Elysia()
    .use(openapi())
    .use(errorHandler)
    .use(healthRoutes)
    .use(petRoutes)
    .use(userRoutes)
    .use(ongRoutes);
