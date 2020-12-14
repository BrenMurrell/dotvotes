exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('campuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('campuses').insert([

        {
          id: 'pōneke',
          campus_name: 'Pōneke'
        },
        {
          id: 'tāmaki-makaurau',
          campus_name: 'Tāmaki Makaurau'
        },
        {
          id: 'wānanga-ipurangi',
          campus_name: 'Wānanga-Ipurangi'
        }
      ])
    })
}
