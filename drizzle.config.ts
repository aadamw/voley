import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

console.log(123, process.env.DATABASE_URL);

export default {
  schema: './db/schemas.ts',
  out: './drizzle',
  driver: 'mysql2',
  dbCredentials: { uri: process.env.DATABASE_URL },
} satisfies Config;
