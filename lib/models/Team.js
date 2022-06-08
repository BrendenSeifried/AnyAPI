const pool = require('../utils/pool');

module.exports = class Team {
  id;
  name;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.founded = row.founded;
    this.founder = row.founder;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FROM teams;');
    return rows.map((list) => new Team(list));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM teams WHERE id=$1;', [id]);
    if (!rows[0]) return null;
    return new Team(rows[0]);
  }
};
