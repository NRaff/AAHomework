PRAGMA foregin_keys = ON;

drop table if exists replies;
drop table if exists question_likes;
drop table if exists question_follows;
drop table if exists questions;
drop table if exists users;


create table users (
  id integer primary key,
  fname text not NULL,
  lname text not null
);

create table questions (
  id integer primary key,
  title text not null,
  body text not null,
  author_id integer not null,

  foreign key (author_id) references users(id)
);

create table question_follows (
  id integer primary key,
  question_id integer not null,
  user_id integer not null,

  foreign key (question_id) references questions(id),
  foreign key (user_id) references users(id)
);

create table replies (
  id integer primary key,
  subject_id integer not null,
  parent_id integer,
  author_id integer not null,

  foreign key (subject_id) references questions(id),
  foreign key (author_id) references users(id),
  foreign key (parent_id) references replies(id)
);

create table question_likes (
  id integer primary key,
  question_id integer not null,
  liker_id integer not null,

  foreign key (question_id) references questions(id),
  foreign key (liker_id) references users(id)
);

insert into
  users (fname, lname)
values
  ("Nick", "Raff"),
  ("James", "Kraus"),
  ("Ross", "Asher"),
  ("Andrew", "Amaroso");

insert into
  questions (title, body, author_id)
values
  ("question 1", "some notes here", 1),
  ("question 2", "some notes here", 2),
  ("question 3", "some notes here", 2),
  ("question 4", "some notes here", 3),
  ("question 5", "some notes here", 1);

insert into
  question_follows (question_id, user_id)
values
  (1, 2),
  (2, 1),
  (2, 3),
  (2, 4),
  (3, 1),
  (3, 2);

insert into
  question_likes (question_id, liker_id)
values
  (1, 2),
  (2, 1),
  (2, 3),
  (2, 4),
  (3, 1),
  (3, 2);