const { Router } = require('express');
const Team = require('../models/Team');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const oneTeam = await Team.getById(id);
    res.json(oneTeam);
  })

  .get('/', async (req, res) => {
    const everyTeam = await Team.getAll();
    res.json(everyTeam);
  });
