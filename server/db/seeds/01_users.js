exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'brenmurrell', cohort: '2020-hihi' },
        { username: 'kelly-keating', cohort: '2020-hihi' },
        { username: 'robert-hamilton', cohort: '2020-hihi' }
      ])
    })
}
