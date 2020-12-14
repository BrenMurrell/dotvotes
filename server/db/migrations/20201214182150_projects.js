exports.up = (knex, Promise) => {
  return knex.schema.createTable('projects', table => {
    table.string('project_id')
    table.string('name')
    table.string('description')
    table.string('lead_uid')
    table.string('cohort_id')
    table.primary('project_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('projects')
}
