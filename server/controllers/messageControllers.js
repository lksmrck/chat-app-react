import pool from "../db.js";

export const getMessages = async (req, res) => {
  const { conversationID } = req.params;

  try {
    const messages = await pool.query(
      "SELECT * FROM message WHERE conversation_id = $1 ORDER BY id ASC",
      [conversationID]
    );

    res.status(200).json(messages.rows);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
