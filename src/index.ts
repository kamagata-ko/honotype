import { serve } from "@hono/node-server";
import { Context, Hono } from "hono";
import { start } from "./routes/start.routes";
import { start2 } from "./routes/start2.routes";
import { routes } from "./routes/index.routes";

const app = new Hono();

// route setting
routes(app);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
