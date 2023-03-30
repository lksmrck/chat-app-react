import pool from "../db.js";
import { generateID } from "../utils/utils.js";

export const getConversations = async (req, res) => {
  const { userID } = req.params;
  /* console.log(userID); */
  try {
    //Find all conversations where requesting user is part of the members array
    const existingConversations = await pool.query(
      "SELECT * FROM conversation WHERE $1=ANY(members)",
      [userID]
    );
    /*    console.log(existingConversations); */
    res.status(200).json(existingConversations.rows);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createConversation = async (req, res) => {
  const {
    searchingUserId,
    searchingUserName,
    searchingUserPhotoUrl,
    foundUserId,
    foundUserName,
    foundUserPhotoUrl,
  } = req.body;

  const generatedID = generateID();

  try {
    //Check if conversation already exists
    const existingConversation = await pool.query(
      "SELECT * FROM conversation WHERE $1=ANY(members) AND $2=ANY(members)",
      [searchingUserId, foundUserId]
    );

    if (existingConversation.rowCount == 0) {
      const newConversation = await pool.query(
        "INSERT INTO conversation (id, members, member1id, member1name, member1photourl, member2id, member2name, member2photourl) VALUES ($1, ARRAY[$2, $3], $4, $5, $6, $7, $8, $9) RETURNING *",
        [
          generatedID,
          searchingUserId,
          foundUserId,
          searchingUserId,
          searchingUserName,
          searchingUserPhotoUrl,
          foundUserId,
          foundUserName,
          foundUserPhotoUrl,
        ]
      );
      res.status(201).json(newConversation.rows);
    } else res.json({ message: "Conversation already exists!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
