exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          uid: '978514',
          username: 'brenmurrell',
          cohort: 'pōneke'
        },
        {
          uid: '25888248',
          username: 'kelly-keating',
          cohort: 'pōneke'
        },
        {
          uid: '55115239',
          username: 'lache-melvin',
          cohort: 'tāmaki-makaurau'
        },
        {
          uid: '70251240',
          username: 'corian-youdale',
          cohort: '2020-hihi'
        },
        {
          uid: '62679021',
          username: 'rose-mead',
          cohort: 'pōneke'
        },
        {
          uid: '918832',
          username: 'rossjourdain',
          cohort: 'pōneke'
        },
        {
          uid: '228761',
          username: 'don-smith',
          cohort: 'tāmaki-makaurau'
        },
        {
          uid: '30305644',
          username: 'emilyparkes',
          cohort: 'tāmaki-makaurau'
        },
        {
          uid: '72309',
          username: 'joshuavial',
          cohort: 'wānanga-ipurangi'
        },
        {
          uid: '69886955',
          username: 'robert-hamilton36',
          cohort: '2020-hihi'
        },
        {
          uid: '69951732',
          username: 'matt-blackbourn',
          cohort: '2020-hihi'
        },
        {
          uid: '67295848',
          username: 'phillip-wood',
          cohort: '2020-hihi'
        },
        {
          uid: '68847766',
          username: 'Htense',
          cohort: '2020-hihi'
        },
        {
          uid: '7808672',
          username: 'meetjohngray',
          cohort: 'wānanga-ipurangi'
        },
        {
          uid: '35519041',
          username: 'Jessicaveng',
          cohort: '2020-hihi'
        },
        {
          uid: '50506515',
          username: 'GarethwRite',
          cohort: '2020-hihi'
        },
        {
          uid: '70116400',
          username: 'ian-montgomery',
          cohort: '2020-hihi'
        },
        {
          uid: '54123920',
          username: 'littleprincey',
          cohort: '2020-hihi'
        },
        {
          uid: '69999281',
          username: 'm-strw',
          cohort: '2020-hihi'
        },
        {
          uid: '57819846',
          username: 'manucanadas',
          cohort: '2020-hihi'
        },
        {
          uid: '66111428',
          username: 'saskialein',
          cohort: '2020-hihi'
        },
        {
          uid: '67719954',
          username: 'Alex-Shatskiy',
          cohort: '2020-hihi'
        },
        {
          uid: '42923006',
          username: 'emily-berryman',
          cohort: '2020-hihi'
        },
        {
          uid: '60296496',
          username: 'jesserosshutt',
          cohort: '2020-hihi'
        },
        {
          uid: '45949419',
          username: 'mackenadam',
          cohort: '2020-hihi'
        },
        {
          uid: '70186488',
          username: 'oli-clive-griffin',
          cohort: '2020-hihi'
        },
        {
          uid: '69124066',
          username: 'olivia-gambitsis',
          cohort: '2020-hihi'
        }
      ])
    })
}
