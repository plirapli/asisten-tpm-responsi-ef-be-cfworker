import { BlankInput } from "hono/types";
import { Context } from "hono";
import { compareArrays, ErrorWithStatusCode } from "../utils.js";
import { Bindings } from "../types/index.js";

const field = ["model", "brand", "ram", "storage", "price"];

// GET
export const get = async (
  c: Context<{ Bindings: Bindings }, "/phones", BlankInput>
) => {
  try {
    const { results } = await c.env.DB.prepare(
      "SELECT id, model, brand, price, imageUrl FROM phones"
    ).all();
    return c.json(
      {
        status: "Success",
        message: "Phones Retrieved",
        data: results,
      },
      200
    );
  } catch (e: any) {
    return c.json(
      { status: "Error", message: e.message || "Internal Server Error" },
      e.statusCode || 500
    );
  }
};

// GET BY ID
export const getById = async (
  c: Context<{ Bindings: Bindings }, "/phones", BlankInput>
) => {
  const id = c.req.param("id");
  try {
    const { results: phone } = await c.env.DB.prepare(
      "SELECT * FROM phones WHERE id = ?"
    )
      .bind(id)
      .all();
    if (!phone) throw new ErrorWithStatusCode("Phone not found 😮", 404);

    return c.json(
      {
        status: "Success",
        message: "Phones Retrieved",
        data: phone,
      },
      200
    );
  } catch (e: any) {
    return c.json(
      { status: "Error", message: e.message || "Internal Server Error" },
      e.statusCode || 500
    );
  }
};

// CREATE
export const create = async (
  c: Context<{ Bindings: Bindings }, "/phones", BlankInput>
) => {
  try {
    const { model, brand, ram, storage, price } = await c.req.json();

    const imageUrl =
      "https://m.media-amazon.com/images/M/MV5BYjJmMjBkZjMtZThiZS00Nzk3LWJlN2UtYmE5ZjkyNjJiZjgxXkEyXkFqcGc@._V1_FMjpg_UX679_.jpg";
    const websiteUrl = "https://www.gsmarena.com/google_pixel_9-13219.php";

    if (!compareArrays(field, Object.keys(await c.req.json())))
      throw new ErrorWithStatusCode("Input gaboleh ada yang kosong!", 400);
    if (ram % 2 != 0)
      throw new ErrorWithStatusCode("RAM harus kelipatan 2", 422);
    if (![128, 256, 512].includes(storage))
      throw new ErrorWithStatusCode(
        "Pilihan storage adalah 128, 256, & 512 GB",
        422
      );

    const statement = c.env.DB.prepare(
      `
      INSERT INTO phones (model, brand, ram, storage, price, imageUrl, websiteUrl)
      VAlUES (?,?,?,?,?,?,?)
    `
    ).bind(model, brand, ram, storage, price, imageUrl, websiteUrl);
    const { meta } = await statement.run();

    return c.json(
      {
        status: "Success",
        message: "New Phone Added",
        id: meta.last_row_id,
      },
      201
    );
  } catch (e: any) {
    return c.json(
      { status: "Error", message: e.message || "Internal Server Error" },
      e.statusCode || 500
    );
  }
};

export const updateById = async (
  c: Context<{ Bindings: Bindings }, "/phones", BlankInput>
) => {
  try {
    const id = parseInt(c.req.param("id")!);
    if (id >= 1 && id <= 10)
      throw new ErrorWithStatusCode("Khusus HP ini gabisa diedit", 400);

    const { model, brand, ram, storage, price } = await c.req.json();
    const imageUrl =
      "https://m.media-amazon.com/images/M/MV5BYjJmMjBkZjMtZThiZS00Nzk3LWJlN2UtYmE5ZjkyNjJiZjgxXkEyXkFqcGc@._V1_FMjpg_UX679_.jpg";
    const websiteUrl = "https://www.gsmarena.com/google_pixel_9-13219.php";

    if (!compareArrays(field, Object.keys(await c.req.json())))
      throw new ErrorWithStatusCode("Input gaboleh ada yang kosong!", 400);
    if (ram % 2 != 0)
      throw new ErrorWithStatusCode("RAM harus kelipatan 2", 422);
    if (![128, 256, 512].includes(storage))
      throw new ErrorWithStatusCode(
        "Pilihan storage adalah 128, 256, & 512 GB",
        422
      );

    const { results: isExist } = await c.env.DB.prepare(
      "SELECT * FROM phones WHERE id = ?"
    )
      .bind(id)
      .all();
    if (!isExist) throw new ErrorWithStatusCode("Phone not found 😮", 404);

    const statement = c.env.DB.prepare(
      `
      UPDATE phones 
      SET model = ?1, brand = ?2, ram = ?3, storage = ?4, price = ?5, imageUrl = ?6, websiteUrl = ?7
      WHERE id = ?8
    `
    ).bind(model, brand, ram, storage, price, imageUrl, websiteUrl, id);
    const { success } = await statement.run();
    if (success)
      return c.json({ status: "Success", message: "Phone Updated" }, 200);
  } catch (e: any) {
    return c.json(
      { status: "Error", message: e.message || "Internal Server Error" },
      e.statusCode || 500
    );
  }
};

export const deleteById = async (
  c: Context<{ Bindings: Bindings }, "/phones", BlankInput>
) => {
  try {
    const id = parseInt(c.req.param("id")!);
    if (id >= 1 && id <= 10)
      throw new ErrorWithStatusCode("Khusus HP ini gabisa diedit", 400);

    const { results: isExist } = await c.env.DB.prepare(
      "SELECT * FROM phones WHERE id = ?"
    )
      .bind(id)
      .all();
    if (!isExist) throw new ErrorWithStatusCode("Phone not found 😮", 404);

    const statement = c.env.DB.prepare("DELETE FROM phones WHERE id = ?").bind(
      id
    );
    const { success } = await statement.run();

    if (success)
      return c.json({ status: "Success", message: "Phone Removed" }, 200);
  } catch (e: any) {
    return c.json(
      { status: "Error", message: e.message || "Internal Server Error" },
      e.statusCode || 500
    );
  }
};
