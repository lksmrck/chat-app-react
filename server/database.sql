CREATE DATABASE chat_app

CREATE TABLE message(
    message_id SERIAL PRIMARY KEY, /* SERIAL PRIMARY KEY = it is unique */
    conversation_id VARCHAR(255),
    text VARCHAR(255),
    time


)