
exports.up = function(knex) {
    return knex.schema
    .createTable('directors', table => {
        table.increments('directors_id')
        table.string('name', 44).unique().notNullable();
        table.string('genre', 30);
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('directors');
};
