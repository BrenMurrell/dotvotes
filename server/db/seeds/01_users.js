exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          uid: '72528696',
          username: 'AdamWhybro',
          cohort: '2021-harakeke'
        },
        {
          uid: '67719954',
          username: 'Alex-Shatskiy',
          cohort: '2020-hihi'
        },
        {
          uid: '5133959',
          username: 'AndKenneth',
          cohort: '2021-harakeke'
        },
        {
          uid: '67266645',
          username: 'Anna-Green',
          cohort: '2020-horoeka'
        },
        {
          uid: '45420005',
          username: 'BtNoor',
          cohort: '2021-kahu'
        },
        {
          uid: '73858996',
          username: 'Christo-lk',
          cohort: '2021-harakeke'
        },
        {
          uid: '70086563',
          username: 'Claire2888',
          cohort: '2020-horoeka'
        },
        {
          uid: '73967535',
          username: 'Filiaci',
          cohort: '2021-harakeke'
        },
        {
          uid: '50506515',
          username: 'GarethwRite',
          cohort: '2020-hihi'
        },
        {
          uid: '69944182',
          username: 'Gavin-Jacobs',
          cohort: '2020-horoeka'
        },
        {
          uid: '62011384',
          username: 'HappinessJane',
          cohort: '2021-harakeke'
        },
        {
          uid: '68847766',
          username: 'Htense',
          cohort: '2020-hihi'
        },
        {
          uid: '44042755',
          username: 'Isaac-Sedcole',
          cohort: '2021-kahu'
        },
        {
          uid: '35519041',
          username: 'Jessicaveng',
          cohort: '2020-hihi'
        },
        {
          uid: '70613193',
          username: 'Kittisan-P',
          cohort: '2020-horoeka'
        },
        {
          uid: '73816283',
          username: 'Pete-Angjelevski',
          cohort: '2021-harakeke'
        },
        {
          uid: '30338645',
          username: 'Piecre24',
          cohort: '2020-horoeka'
        },
        {
          uid: '15070793',
          username: 'Rosemary-Hawkes',
          cohort: '2021-kahu'
        },
        {
          uid: '73861988',
          username: 'Samardeep90',
          cohort: '2021-kahu'
        },
        {
          uid: '73620112',
          username: 'Ste-Perry',
          cohort: '2021-kahu'
        },
        {
          uid: '65952319',
          username: 'al-abbas-nz',
          cohort: '2020-horoeka'
        },
        {
          uid: '71747661',
          username: 'annamccormack',
          cohort: '2021-harakeke'
        },
        {
          uid: '978514',
          username: 'brenmurrell',
          cohort: 'pōneke'
        },
        {
          uid: '70181184',
          username: 'caroline-pitcher',
          cohort: '2020-horoeka'
        },
        {
          uid: '70251240',
          username: 'corian-youdale',
          cohort: '2020-hihi'
        },
        {
          uid: '8535203',
          username: 'cphilathong',
          cohort: '2021-harakeke'
        },
        {
          uid: '69325538',
          username: 'crystalcrystal-lim',
          cohort: '2020-horoeka'
        },
        {
          uid: '74221561',
          username: 'dainyleen',
          cohort: '2021-harakeke'
        },
        {
          uid: '59737094',
          username: 'daniel-harris96',
          cohort: '2020-horoeka'
        },
        {
          uid: '228761',
          username: 'don-smith',
          cohort: 'tāmaki-makaurau'
        },
        {
          uid: '42923006',
          username: 'emily-berryman',
          cohort: '2020-hihi'
        },
        {
          uid: '30305644',
          username: 'emilyparkes',
          cohort: 'tāmaki-makaurau'
        },
        {
          uid: '18325651',
          username: 'fieldskjellerup',
          cohort: '2020-horoeka'
        },
        {
          uid: '60165179',
          username: 'gpoliko',
          cohort: '2020-horoeka'
        },
        {
          uid: '22077219',
          username: 'haywardlara',
          cohort: '2021-kahu'
        },
        {
          uid: '70116400',
          username: 'ian-montgomery',
          cohort: '2020-hihi'
        },
        {
          uid: '73858124',
          username: 'j-ack-bennett',
          cohort: '2021-kahu'
        },
        {
          uid: '69236334',
          username: 'jack-snodgrass',
          cohort: '2020-horoeka'
        },
        {
          uid: '73873192',
          username: 'jeff-seymour',
          cohort: '2021-kahu'
        },
        {
          uid: '60296496',
          username: 'jesserosshutt',
          cohort: '2020-hihi'
        },
        {
          uid: '72309',
          username: 'joshuavial',
          cohort: 'wānanga-ipurangi'
        },
        {
          uid: '17925683',
          username: 'julia-kurganskaia',
          cohort: '2021-kahu'
        },
        {
          uid: '69779682',
          username: 'justin-lourie-cole',
          cohort: '2021-harakeke'
        },
        {
          uid: '25888248',
          username: 'kelly-keating',
          cohort: 'pōneke'
        },
        {
          uid: '69855538',
          username: 'kg-anderson',
          cohort: '2021-harakeke'
        },
        {
          uid: '55115239',
          username: 'lache-melvin',
          cohort: 'tāmaki-makaurau'
        },
        {
          uid: '73852663',
          username: 'leilani-heather',
          cohort: '2021-harakeke'
        },
        {
          uid: '54123920',
          username: 'littleprincey',
          cohort: '2020-hihi'
        },
        {
          uid: '73917857',
          username: 'logan-webber',
          cohort: '2021-kahu'
        },
        {
          uid: '63496113',
          username: 'lukas-jj',
          cohort: '2021-kahu'
        },
        {
          uid: '69999281',
          username: 'm-strw',
          cohort: '2020-hihi'
        },
        {
          uid: '45949419',
          username: 'mackenadam',
          cohort: '2020-hihi'
        },
        {
          uid: '57819846',
          username: 'manucanadas',
          cohort: '2020-hihi'
        },
        {
          uid: '69898604',
          username: 'maria-gedye',
          cohort: '2020-horoeka'
        },
        {
          uid: '39108372',
          username: 'mariano-zeppa',
          cohort: '2021-harakeke'
        },
        {
          uid: '8053197',
          username: 'marsdepa',
          cohort: '2021-kahu'
        },
        {
          uid: '69951732',
          username: 'matt-blackbourn',
          cohort: '2020-hihi'
        },
        {
          uid: '7808672',
          username: 'meetjohngray',
          cohort: 'wānanga-ipurangi'
        },
        {
          uid: '73506758',
          username: 'mike-parkin',
          cohort: '2021-kahu'
        },
        {
          uid: '74089857',
          username: 'minhaz-chhiboo',
          cohort: '2021-harakeke'
        },
        {
          uid: '35914987',
          username: 'multiahfoon',
          cohort: '2021-harakeke'
        },
        {
          uid: '73915562',
          username: 'naomi-porter',
          cohort: '2021-kahu'
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
        },
        {
          uid: '16403433',
          username: 'peter-lim91',
          cohort: '2021-harakeke'
        },
        {
          uid: '67295848',
          username: 'phillip-wood',
          cohort: '2020-hihi'
        },
        {
          uid: '73087376',
          username: 'robbo-one',
          cohort: '2021-kahu'
        },
        {
          uid: '69886955',
          username: 'robert-hamilton36',
          cohort: '2020-hihi'
        },
        {
          uid: '7973687',
          username: 'rodrigohdiaz',
          cohort: '2020-horoeka'
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
          uid: '66111428',
          username: 'saskialein',
          cohort: '2020-hihi'
        },
        {
          uid: '55133797',
          username: 'shellymutu-grigg',
          cohort: '2020-horoeka'
        },
        {
          uid: '11223573',
          username: 'sirchras',
          cohort: '2021-harakeke'
        },
        {
          uid: '73867233',
          username: 'steve-kim-96',
          cohort: '2021-harakeke'
        },
        {
          uid: '70182745',
          username: 'tai-hona',
          cohort: '2020-horoeka'
        },
        {
          uid: '58315812',
          username: 'tausani-ah-chong',
          cohort: '2021-harakeke'
        },
        {
          uid: '73091215',
          username: 'tom-may',
          cohort: '2021-kahu'
        },
        {
          uid: '249769',
          username: 'tomgriffin',
          cohort: '2020-horoeka'
        },
        {
          uid: '54966219',
          username: 'wallace222',
          cohort: '2021-harakeke'
        },
        {
          uid: '65894147',
          username: 'web-dev-dave',
          cohort: '2020-horoeka'
        }
      ])
    })
}
