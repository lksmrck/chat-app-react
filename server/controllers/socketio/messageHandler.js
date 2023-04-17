import pool from "../../db.js";

const messageHandler = async (socket, message) => {
  const { conversation_id, sender_id, receiver_id, text, time } = message;

  try {
    const newMessage = await pool.query(
      "INSERT INTO message (conversation_id, sender_id, receiver_id, text, time) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [conversation_id, sender_id, receiver_id, text, time]
    );
    socket.to(message.conversation_id).emit("receive_message", newMessage.rows[0]);
  } catch (error) {
    //TODO: Error handle
    res.status(404).json({ message: error.message });
  }
};

export default messageHandler;
