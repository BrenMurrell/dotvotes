exports.up = (knex, Promise) => {
  return knex.schema.createTable('cohorts', table => {
    table.string('id')
    table.string('display_name')
    table.string('campus_id')
    table.string('status')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('cohorts')
}
