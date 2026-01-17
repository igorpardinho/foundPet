import Elysia from "elysia";
import { healthRoutes } from "./modules/health/health.routes";
import openapi from "@elysiajs/openapi";

export const app = new Elysia().use(openapi()).use(healthRoutes);
