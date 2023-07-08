const { randomUUID } = require('crypto');
const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authenticaion-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../modules/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  res.send(req.user);
});

router.post('/register', (req, res, next) => {
  const { username } = req.body;
  const password = encryptLib.encryptPassword(req.body.password);
  const id = randomUUID();

  console.log(id, 'id');

  const queryText =
    'INSERT INTO person (id, username, password) VALUES ($1, $2, $3) RETURNING id';
  pool
    .query(queryText, [id, username, password])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.put('/:id/:property', (req, res) => {
  const user = req.params.id;
  const { property } = req.params;
  const { data } = req.body;
  let queryText;
  let queryParams;

  switch (property) {
    case 'bio':
      queryText = `UPDATE "person" SET "bio" = $1
                   WHERE "id" = $2;`;
      queryParams = [data, user];
      break;
    case 'newGoal':
      queryText = `UPDATE "person" SET "word_goal" = $1
                   WHERE "id" = $2;`;
      queryParams = [data, user];
      break;
    default:
      return res.sendStatus(400); // Bad request
  }

  pool
    .query(queryText, queryParams)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });

  return null; // Return a value to satisfy eslint
});
module.exports = router;
