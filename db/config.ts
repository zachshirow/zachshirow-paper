import { defineDb, defineTable, column } from 'astro:db';

const Comment = defineTable({
  columns: {
    author: column.text(),
    body: column.text(),
    published: column.boolean()
  }
})
// https://astro.build/db/config
export default defineDb({
  tables: {Comment}
});
