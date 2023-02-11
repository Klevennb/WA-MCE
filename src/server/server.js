const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

const passport = require("./modules/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
// const promptsRouter = require('./routes/prompts.router');
const entriesRouter = require("./routes/entries.router");
// const genresRouter = require('./routes/genres.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
// app.use('/api/prompts', promptsRouter);
app.use("/api/entries", entriesRouter);
// app.use('/api/genres', genresRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
