import pool from "../db.js";

export const getConversations = async (req, res) => {
  const { userID } = req.params;

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
