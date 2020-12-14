exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cohort_members').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohort_members').insert([
        {
          user_uid: '72528696',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '67719954',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '5133959',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '67266645',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '45420005',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '73858996',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '70086563',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '73967535',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '50506515',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '69944182',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '62011384',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '68847766',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '44042755',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '35519041',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '70613193',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '73816283',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '30338645',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '15070793',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '73861988',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '73620112',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '65952319',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '71747661',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '978514',
          cohort_id: 'pōneke'
        },
        {
          user_uid: '70181184',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '70251240',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '8535203',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '69325538',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '74221561',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '59737094',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '228761',
          cohort_id: 'tāmaki-makaurau'
        },
        {
          user_uid: '42923006',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '30305644',
          cohort_id: 'tāmaki-makaurau'
        },
        {
          user_uid: '18325651',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '60165179',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '22077219',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '70116400',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '73858124',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '69236334',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '73873192',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '60296496',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '72309',
          cohort_id: 'wānanga-ipurangi'
        },
        {
          user_uid: '17925683',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '69779682',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '25888248',
          cohort_id: 'pōneke'
        },
        {
          user_uid: '69855538',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '55115239',
          cohort_id: 'tāmaki-makaurau'
        },
        {
          user_uid: '73852663',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '54123920',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '73917857',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '63496113',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '69999281',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '45949419',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '57819846',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '69898604',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '39108372',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '8053197',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '69951732',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '7808672',
          cohort_id: 'wānanga-ipurangi'
        },
        {
          user_uid: '73506758',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '74089857',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '35914987',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '73915562',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '70186488',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '69124066',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '16403433',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '67295848',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '73087376',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '69886955',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '7973687',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '62679021',
          cohort_id: 'pōneke'
        },
        {
          user_uid: '918832',
          cohort_id: 'pōneke'
        },
        {
          user_uid: '66111428',
          cohort_id: '2020-hihi'
        },
        {
          user_uid: '55133797',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '11223573',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '73867233',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '70182745',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '58315812',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '73091215',
          cohort_id: '2021-kahu'
        },
        {
          user_uid: '249769',
          cohort_id: '2020-horoeka'
        },
        {
          user_uid: '54966219',
          cohort_id: '2021-harakeke'
        },
        {
          user_uid: '65894147',
          cohort_id: '2020-horoeka'
        }
      ])
    })
}
