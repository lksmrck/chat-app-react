import pool from "../../db.js";
import { generateID } from "../../utils/utils.js";
import { io } from "../../index.js";

export const addConversationHandler = async (socket, conversation) => {
  /* const { conversation_id, sender_id, receiver_id, text, time } = message; */

  const {
    searchingUserId,
    searchingUserName,
    searchingUserPhotoUrl,
    foundUserId,
    foundUserName,
    foundUserPhotoUrl,
  } = conversation;

  const generatedID = generateID();

  //All connected sockets
  const sockets = await io.fetchSockets();

  //Find receivers socket.id by his userID on the front end
  const receiver = sockets.filter((socket) => socket.userID === foundUserId);

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

      socket
        .to(receiver[0].id)

        .emit("added__me_to_conversations", newConversation.rows[0]);
    } /* else
      socket
        .to(receiver[0].id)
                .to(receivers[1].id)
        .emit("added__me_to_conversations", existingConversation.rows[0]); */
  } catch (error) {
    socket.to(receiver[0].id).emit("process_error", error);
  }
};

export default addConversationHandler;
