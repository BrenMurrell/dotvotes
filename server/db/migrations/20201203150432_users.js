exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.string('username')
    table.string('cohort')
    table.primary(['username', 'cohort'])
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
