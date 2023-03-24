CREATE DATABASE chat_app

CREATE TABLE message(
    message_id SERIAL PRIMARY KEY, 
    conversation_id VARCHAR(255),
    text TEXT,
    time VARCHAR(255)
)