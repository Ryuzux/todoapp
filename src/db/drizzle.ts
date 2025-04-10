import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env" });

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw console.log("DATABASE_URL is not defined in the environment variables.");
}

export const db = drizzle(databaseUrl);
