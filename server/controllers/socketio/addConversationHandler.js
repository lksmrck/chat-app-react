import pool from "../../db.js";
import { generateID } from "../../utils/utils.js";
import { io } from "../../index.js";

export const addConversationHandler = async (socket, conversation) => {
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

  //Find receivers socket.id by his userID from the front end
  const receiver = sockets.filter((socket) => socket.userID === foundUserId);

  try {
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
    //Sends only if the receiving user is connected to socket
    if (receiver)
      socket.to(receiver[0].id).emit("added__me_to_conversations", newConversation.rows[0]);
  } catch (error) {
    socket.to(receiver[0].id).emit("process_error", error);
  }
};

export default addConversationHandler;
