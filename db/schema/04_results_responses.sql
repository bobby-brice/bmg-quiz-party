DROP TABLE IF EXISTS results
CASCADE;
DROP TABLE IF EXISTS responses
CASCADE;

CREATE TABLE results
(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
);

CREATE TABLE responses
(
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  answer_id INTEGER REFERENCES answers(id) ON DELETE CASCADE,
  result_id INTEGER REFERENCES results(id) ON DELETE CASCADE
);

