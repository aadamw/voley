import { varchar, timestamp, mysqlEnum, mysqlTable } from 'drizzle-orm/mysql-core';

export const subscribers = mysqlTable('subscribers', {
  status: mysqlEnum('status', ['subscribed', 'unsubscribed']),
  email: varchar('email', { length: 256 }).primaryKey(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
