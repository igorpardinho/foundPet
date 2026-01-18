import Elysia from "elysia";
import { healthRoutes } from "./modules/health/health.routes";
import openapi from "@elysiajs/openapi";
import { petRoutes } from "./modules/pets/pet.routes";
import { userRoutes } from "./modules/users/user.routes";

export const app = new Elysia()
    .use(openapi())
    .use(healthRoutes)
    .use(petRoutes)
    .use(userRoutes);
