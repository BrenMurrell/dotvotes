exports.up = (knex, Promise) => {
  return knex.schema.createTable('cohorts', table => {
    table.string('id')
    table.string('display_name')
    table.string('campus_id')
    table.string('status')
    table.primary('id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('cohorts')
}
