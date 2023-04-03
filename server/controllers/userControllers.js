import pool from "../db.js";

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { uid: id, displayName: name, email, photoURL } = req.body;

    //Check if user is already in DB
    const userAlreadyInDb = await pool.query('SELECT * FROM "user" WHERE id = $1', [id]);

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
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const findUsers = async (req, res) => {
  try {
    const { email } = req.params;
    const { searchingUserID } = req.body;
    //Find user which email contains the req.params string (can be partial)
    const foundUsers = await pool.query(
      'SELECT * FROM "user" WHERE position($1 in LOWER(email))>0 EXCEPT SELECT * FROM "user" WHERE id = $2 ',
      [email, searchingUserID]
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
    } else {
      res.status(404).json({ message: "No such user found." });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
