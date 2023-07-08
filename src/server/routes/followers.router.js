/* eslint-disable eslint-comments/require-description */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/add-follow', (req, res) => {
  const { followerId = '20a3d945-06a0-497f-9924-59ea83b9d5c3' } = req.body;
  const { followerName = 'Steve' } = req.body;
  const userId = req.user.id;

  const queryValues = [userId, followerId, followerName];

  const queryText = `
INSERT INTO follower_table (user_id, follower_id, follower_name)
VALUES ($1, $2, $3)
ON CONFLICT (user_id, follower_id) DO NOTHING;
`;

  console.log('in thing', queryValues);

  pool
    .query(queryText, queryValues)
    .then(() => {
      console.log('Insert successful');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('Error executing query:', err);
      res.sendStatus(500);
    });
});

// router.get('/', (req, res) => {
//     const userID = req.user.id;
// const queryText = 'SELECT * FROM writing_entry WHERE author_id = ($1);';
//  pool.query(queryText,
//     [userID])
//     .then((results) => res.send(results.rows))
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// })

module.exports = router;
