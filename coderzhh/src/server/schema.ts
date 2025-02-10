import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const VisitCt = pgTable('VisitCt', {  // 使用下划线命名规范
  id: serial('id').primaryKey().notNull(),
  visitTime: timestamp('visit_time').defaultNow().notNull(), 
});