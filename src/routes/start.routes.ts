import { Context, Hono } from "hono";

export const start = () => {
  const app = new Hono();
  app.get("", (c) => {
    return c.text("Hello Hono!");
  });

  app.post("user/:name/:age", (c: Context) => {
    const { name, age } = c.req.param();
    return c.json({ name, age1: parseInt(age) }, 201);
  });
  return app;
};
