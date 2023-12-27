import { config } from "dotenv";
import { z } from "zod";
import sqlite3 from 'sqlite3';

if (process.env.NODE_ENV == 'test') {
  process.env.DATABASE_URL = "./db/test.db"
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_CLIENT: z.enum(["sqlite", "pg"]),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (_env.success == false) {
  console.error("invalid environment variables", _env.error.format());

  throw new Error("invalid enviroment variables");
}


export const env = _env.data