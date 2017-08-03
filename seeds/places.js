exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Places').del()
    .then(function () {
      // Inserts seed entries
      return knex('Places').insert([
        {id: 1, place: 'Cape Reinga', date: '17/11/2015', description: 'Lighthouse', image: 'https://t1.pixers.pics/img/obrazy-na-plotnie-cape-reinga-lighthouse-krawedz-na-polnoc-od-nowej-zelandii.png?H4sIAAAAAAAAAyWKUQrCMBAFr6MgfUm2SdoeoL89QknjRiMioZuCeHojfr1h5uF4SUiMlJ-Vd5l2lvzhk1fqos6411pkAoS6kt-tt4mCP6OdMC9wBr0FOQzmp9Z5caa35AazJiLW2vsUgyKTjN-ubiS9-TFE1sp2j3L7AhACHOiCAAAA'},
        {id: 2, place: 'Karikari Pennisula', date: '20/11/2015', description: 'Matai Bay, Puheke Beach', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/a7/63/3d/taumarumaru-reserve-in.jpg'},
        {id: 3, place: 'Coopers Beach', date: '18/11/2015', description: 'nice beach', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/a7/63/3d/taumarumaru-reserve-in.jpg'},
        {id: 4, place: '90 Mile Beach', date: '19/11/2015', description: 'Giant Te Paki', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/a7/63/3d/taumarumaru-reserve-in.jpg'},
        {id: 5, place: 'Kawakawa', date: '21/11/2015', description: 'Hundertwasser toilet', image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/a7/63/3d/taumarumaru-reserve-in.jpg'}

      ]);
    });
};
