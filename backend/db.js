import postgresql from "pg";
const { Pool } = postgresql;

export default (callback = null) => {
  const pool = new Pool({
    user: "mydb_role",
    password: "some_password",
    host: "localhost",
    port: 5432,
    database: "mydb",
  });

  const connection = {
    pool,
    query: (...args) => {
      return pool.connect().then((client) => {
        return client.query(...args).then((res) => {
          client.release();
          return res.rows;
        });
      });
    },
  };

  process.postgresql = connection;

  if (callback) {
    callback(connection);
  }

  return connection;
};
