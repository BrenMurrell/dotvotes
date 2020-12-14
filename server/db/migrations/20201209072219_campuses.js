exports.up = (knex, Promise) => {
  return knex.schema.createTable('campuses', table => {
    table.string('id')
    table.string('campus_name')
    table.primary('id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('campuses')
}
