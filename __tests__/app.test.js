const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { teams } = require('../data/nbateams');

describe('nba test one', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('listed NBA teams with id and name', async () => {
    const test = await request(app).get('/teams');
    const result = teams.map((team) => {
      return { id: team.id, name: team.name };
    });
    expect(test.body).toEqual(result);
  });

  it('checking for one team (Celtics)', async () => {
    const resp = await request(app).get('/teams/4');
    const teestingTeamFour = {
      id: '4',
      name: 'Celtics',
      founded: 1946,
      founder: 'Walter A. Brown',
    };
    expect(resp.body).toEqual(teestingTeamFour);
  });
  afterAll(() => {
    pool.end();
  });
});
