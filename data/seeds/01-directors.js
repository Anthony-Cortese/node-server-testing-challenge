
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('directors').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('directors').insert([
        {directors_id: 1, name: 'Darren Aronofsky', genre: 'Drama'},
        {directors_id: 2, name: 'David Fincher', genre: 'Drama'},
        {directors_id: 3, name: 'Christopher Nolan', genre: 'Drama'}
      ]);
    });
};
