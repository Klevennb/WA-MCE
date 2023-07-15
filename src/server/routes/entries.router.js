/* eslint-disable no-console */
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
  const { isPublic } = req.body;

  const userID = req.user.id;
  const contents = req.body.contents || 'N/A';
  const title = req.body.title || 'N/A';
  const genre = req.body.genre || 'N/A';
  const timeLength = req.body.time_to_write || '23:59:59.9999999';
  const entryLength = req.body.entry_length || 'N/A';
  const entryPrompt = req.body.entry_prompt || 'N/A';

  const queryText =
    'INSERT INTO writing_entry (author_id, title, contents, length, genre, time_to_write, prompt, public) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);';
  pool
    .query(queryText, [
      userID,
      title,
      contents,
      entryLength,
      genre,
      timeLength,
      entryPrompt,
      isPublic,
    ])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
  const userID = req.user.id;
  const queryText = 'SELECT * FROM writing_entry WHERE author_id = ($1);';
  pool
    .query(queryText, [userID])
    .then((results) => res.send(results.rows))
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
  const { contents, title, isPublic, isDeleted } = req.body;
  const genre = req.body.genre || 'N/A';
  const timeLength = req.body.time_to_write || '23:59:59.9999999';
  const entryLength = req.body.entry_length;
  const entryPrompt = req.body.entry_prompt || 'N/A';
  const entryId = req.body.entry_id;

  const queryText =
    'UPDATE writing_entry SET title = $1, contents= $2, length= $3, genre= $4, time_to_write= $5, prompt= $6, public= $7, is_deleted= $8 WHERE (id = $9);';
  pool
    .query(queryText, [
      title,
      contents,
      entryLength,
      genre,
      timeLength,
      entryPrompt,
      isPublic,
      isDeleted,
      entryId,
    ])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
