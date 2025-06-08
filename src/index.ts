import { Hono } from "hono";
import { cors } from "hono/cors";
import { Bindings } from "./types";
import * as phone from "./controllers/phone.controller";

const app = new Hono<{ Bindings: Bindings }>().basePath("/api/v1");
app.use("/api/*", cors());

app.get("/phones", phone.get);
app.get("/phones/:id", phone.getById);
app.post("/phones", phone.create);
app.put("/phones/:id", phone.updateById);
app.delete("/phones/:id", phone.deleteById);

export default app;
