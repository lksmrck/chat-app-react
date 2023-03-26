/* Starting DB queries to reperform DB creation and tables creation */
CREATE DATABASE chat_app

CREATE TABLE "user" (
    id text PRIMARY KEY,
    name character varying(255),
    email character varying(255),
    photourl character varying
);

CREATE TABLE conversation (
    id character varying PRIMARY KEY,
    members text[],
    member1id character varying,
    member1name character varying,
    member1photourl character varying,
    member2id character varying,
    member2name character varying,
    member2photourl character varying,
);

CREATE TABLE message (
    id SERIAL PRIMARY KEY,
    conversation_id character varying REFERENCES conversation(id),
    text text,
    time character varying(255)
);