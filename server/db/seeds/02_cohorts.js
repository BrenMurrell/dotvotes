exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {
          id: '2020-hihi',
          display_name: 'Hihi 2020',
          campus_id: 'pōneke',
          status: 'current'
        },
        {
          id: '2021-kahu',
          display_name: 'Kahu 2021',
          campus_id: 'pōneke',
          status: 'future'
        },
        {
          id: 'pōneke',
          display_name: 'Pōneke',
          campus_id: 'pōneke',
          status: 'current'
        },
        {
          id: 'tāmaki-makaurau',
          display_name: 'Tāmaki Makaurau',
          campus_id: 'tāmaki-makaurau',
          status: 'current'
        },
        {
          id: 'wānanga-ipurangi',
          display_name: 'Wānanga-Ipurangi',
          campus_id: 'wānanga-ipurangi',
          status: 'current'
        }
      ])
    })
}
