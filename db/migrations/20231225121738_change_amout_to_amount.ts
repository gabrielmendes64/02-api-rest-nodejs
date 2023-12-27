import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('transactions', (table) => {
      table.renameColumn('amout', 'amount');
    });
  }
  
  export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('transactions', (table) => {
      table.renameColumn('amount', 'amout');
    });
  }

