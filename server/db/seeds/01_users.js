exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { uid: '978514', username: 'brenmurrell', cohort: 'pōneke' },
        { uid: '25888248', username: 'kelly-keating', cohort: 'pōneke' },
        { uid: '55115239', username: 'lache-melvin', cohort: 'tāmaki-makaurau' },
        { uid: '25571745', username: 'robert-hamilton', cohort: '2020-hihi' },
        { uid: '42923006', username: 'emily-berryman', cohort: '2020-hihi' },
        { uid: '72309', username: 'joshuavial', cohort: 'wānanga-ipurangi' }
      ])
    })
}
