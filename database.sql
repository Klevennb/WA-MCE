CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "current_streak" INT,
    "word_goal" INT,
    "time_goal" INT
);
CREATE TABLE "genre" (
"id" SERIAL PRIMARY KEY,
"types" VARCHAR (25) NOT NULL
);
CREATE TABLE "prompt_type" (
"id" SERIAL PRIMARY KEY,
"prompt_type" VARCHAR (25)
);
CREATE TABLE "writing_entry" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR,
"name" VARCHAR (200),
"contents" VARCHAR (8000),
"length" INT,
"genre" VARCHAR (30),
"time_length" INT,
"submission_time" VARCHAR (60),
"prompt" VARCHAR (800)
);

CREATE TABLE "prompts" (
"id" SERIAL PRIMARY KEY,
"type_of_prompt" INT,
"text" VARCHAR (1000),
"image_url" VARCHAR (200)
);

INSERT INTO "genre" ("types")
VALUES ('Science Fiction'), ('Mystery'), ('Romance');

INSERT INTO "prompt_type" ("prompt_type")
VALUES ('Creative'), ('Sci-fi'), ('Fantasy'), ('Advice'), ('Image'), ('Journal'), ('Affirmation');

INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('advice'), ('Quantity creates quality');

INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('4','Quantity creates quality:
The best hygiene for beginning writers or intermediate writers is to write a hell of a lot of short stories. If you can write one short story a week—it doesn’t matter what the quality is to start, but at least you’re practicing, and at the end of the year you have 52 short stories, and I defy you to write 52 bad ones. Can’t be done. At the end of 30 weeks or 40 weeks or at the end of the year, all of a sudden a story will come that’s just wonderful. - Ray Bradbury');

INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('4','If writing seems hard, it’s because it is hard. It’s one of the hardest things people do. – William Zinsser');

INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('1','You aunt passes away, leaving you $500,000 in her will under the condition that you resume care for your hundred-year-old home.');
INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('1','A loved one confides in you, but the secret could damage someone else you care about. What do you do? ');
INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('1','Your fingers tensed around the object in your pocket, ready to pull it out at a moment’s notice. ');
INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('1','Local gravestones begin disappearing.');



INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('2','Your spaceship has landed on an unknown planet and there is data showing lifeforms who have created artistic structures. There is an artist in your group who wants to make first contact with the beings through art.');
INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('2','The Earth has reached its breaking point after global warming and widespread disease, and a group of aliens arrive to help humans rebuild the planet they have destroyed.');
INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('2','We discover that beneath its seemingly uninhabitable appearance, Mars has an entire race of subterranean alien lifeforms living on it. You are part of the team sent to explore this civilization.');

INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('3','Write about a person who meets with the ghost of an old friend for tea every so often.');a
INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('3','Write a story about someone who finds a magical portal in their home.');
INSERT INTO "prompts" ("type_of_prompt", "text")
VALUES ('3','One day, the sun rose in the west and set in the east.');