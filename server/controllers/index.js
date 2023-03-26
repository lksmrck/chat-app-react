import express from "express";
import pool from "../db.js";
const router = express.Router();
import { generateID } from "../utils/utils.js";

//TBD
export const getMessages = async (req, res) => {
  /*   const conversationId = req.query.conversationId;  */ //identifikátor konverzace

  try {
    const conversation = 0; //vytažení z DB

    res.status(200).json(conversation);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//TBD
export const sendMessage = async (req, res) => {
  const { sender, text, date } = req.body;
  console.log(sender);
  console.log(text);
  console.log(date);

  try {
    //Ulozeni do db
    res.status(201).json(message);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getConversations = async (req, res) => {
  const { userID } = req.params;
  console.log(userID);
  try {
    //Find all conversations where requesting user is part of the members array
    const existingConversations = await pool.query(
      "SELECT * FROM conversation WHERE $1=ANY(members)",
      [userID]
    );
    /*    console.log(existingConversations); */
    res.status(200).json(existingConversations.rows);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//DONE
export const createConversation = async (req, res) => {
  /*   const { searchingUserId, foundUserId } = req.body; */
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

//Přidání nové konverzace po kliknutí na + button v navbaru
//DONE
export const findUsers = async (req, res) => {
  try {
    const { email } = req.params;
    //Find user which email contains the req.params string (can be partial)
    const foundUsers = await pool.query(
      'SELECT * FROM "user" WHERE position($1 in LOWER(email))>0',
      [email]
    );
    //If such users found, returns an array of users. Otherwise returns 404
    if (foundUsers.rowCount > 0) {
      //Modify key names
      const foundUsersAdjusted = foundUsers.rows.map((user) => {
        return {
          displayName: user.name,
          photoURL: user.photourl,
          uid: user.id,
        };
      });

      res.json(foundUsersAdjusted);
      /* res.json(foundUsers.rows); */
    } else res.json({ message: "No such user found." });
  } catch (err) {
    console.log(err);
  }
};

//TBD
export const getUser = async (req, res) => {
  try {
    const { email } = req.params;

    const foundUser = await pool.query(
      'SELECT * FROM "user" WHERE $1 LIKE "%" || LOWER(email) || "%"',
      [email]
    );
    console.log(foundUser);
  } catch (err) {
    console.log(err);
  }
};

//DONE
export const createUser = async (req, res) => {
  try {
    const { uid: id, displayName: name, email, photoURL } = req.body;

    //Check if user is already in DB
    const userAlreadyInDb = await pool.query(
      'SELECT * FROM "user" WHERE id = $1',
      [id]
    );

    if (userAlreadyInDb.rowCount === 0) {
      const newUser = await pool.query(
        'INSERT INTO "user" (id, name, email, photourl) VALUES ($1, $2, $3, $4) RETURNING *',
        [id, name, email, photoURL]
      );
      //Returns user data, if user was created
      res.status(201).json(newUser.rows[0]);
    } else {
      res.status(200).json({ message: "User is already in DB" });
    }

    /*  res.status("User is already in DB"); */
  } catch (err) {
    console.log(err);
  }
};
