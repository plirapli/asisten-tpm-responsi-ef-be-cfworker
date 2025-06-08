import { Hono } from "hono";
import { cors } from "hono/cors";
import { Bindings } from "./types";
import * as phone from "./controllers/phone.controller";

const app = new Hono<{ Bindings: Bindings }>().basePath("/api/v1");
app.use("/api/*", cors());

app
  .get("/phones", phone.get)
  .get("/phones/:id", phone.getById)
  .post("/phones", phone.create)
  .put("/phones/:id", phone.updateById)
  .delete("/phones/:id", phone.deleteById);

export default app;
