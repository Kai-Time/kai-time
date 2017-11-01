
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('profiles', (table) => {
    table.increments('id')
    table.string('user_id')
    table.string('firstname')
    table.string('lastname')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profiles')
}