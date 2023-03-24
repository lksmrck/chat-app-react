//Connection of DB to server

import pg from "pg";

const Pool = pg.Pool;

const pool = new Pool({});
