const pool = require('../utils/pool');

module.exports = class Team {
  id;
  name;

  constructor(item) {
    this.id = item.id;
    this.name = item.name;
    this.founded = item.founded;
    this.founder = item.founder;
  }
  static async getAll() {
    const { items } = await pool.query('SELECT id, name FROM teams;');
    return items.map((list) => new Team(list));
  }

  static async getById(id) {
    const { items } = await pool.query('SELECT * FROM teams WHERE id=$5;', [
      id,
    ]);
    if (!items[0]) return null;
    return new Team(items[0]);
  }
};
