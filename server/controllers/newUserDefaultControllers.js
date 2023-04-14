import pool from "../db.js";
import { generateID } from "../utils/utils.js";

export const newUserDefaultConversation = async (createdUserObject) => {
  const { id, name, photoURL } = createdUserObject;

  //Default user, who will be added to every newly created user
  const defaultID = "7sdLnnhMlucSlyvu1Vex4W0iH4f2";
  const defaultName = "Lukas Kangaroo";
  const defaultPhotoURL =
    "https://lh3.googleusercontent.com/a/AGNmyxacbPRsDKosQcyJZ1FUZEIt7uJhnLNHaB4-4I6P=s96-c";

  const generatedID = generateID();

  //Creating a conversation
  await pool.query(
    "INSERT INTO conversation (id, members, member1id, member1name, member1photourl, member2id, member2name, member2photourl) VALUES ($1, ARRAY[$2, $3], $4, $5, $6, $7, $8, $9) RETURNING *",
    [generatedID, id, defaultID, id, name, photoURL, defaultID, defaultName, defaultPhotoURL]
  );

  //Adding default messages
  const defaultMessages = [
    "Hello stranger!",
    "Thank you for testing this app. I am your default friend, so you can try this app a bit :)",
    'For start, you can add a conversation by clicking "+" button in navigation bar and start typing user email',
    'Since there is not many users, try to start typing "Lukas" :)',
  ];
  const date = new Date();

  for (const message of defaultMessages) {
    await pool.query(
      "INSERT INTO message (conversation_id, sender_id, receiver_id, text, time) VALUES ($1, $2, $3, $4, $5)",
      [generatedID, defaultID, id, message, date]
    );
  }
};
