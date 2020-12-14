exports.up = (knex, Promise) => {
  return knex.schema.createTable('cohort_members', table => {
    table.string('cohort_id')
    table.string('user_uid')
    table.primary(['cohort_id', 'user_uid'])
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('cohort_members')
}
