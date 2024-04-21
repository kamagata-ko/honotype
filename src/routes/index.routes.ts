import { Context, Hono } from "hono";
import { start } from "./start.routes";
import { start2 } from "./start2.routes";

export const routes = (app: Hono): void => {
  app.route("/", start());
  app.route("/v2", start2());
};
