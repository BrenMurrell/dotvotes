exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.string('uid')
    table.string('username')
    table.string('cohort')
    table.primary('uid')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
