import dbPool from "../utils/db.js";

export const getData = () => {
  const sql = "SELECT * FROM tasks";
  const result = dbPool.query(sql);

  return result;
};

export const getDataById = (id) => {
  const sql = "SELECT task_id,  is_completed, create_at FROM tasks WHERE task_id = ?";
  const result = dbPool.query(sql, [id]);

  return result;
};

export const createData = (name, user, completed = false) => {
  let createdAt = new Date();
  const sql = "INSERT INTO tasks ( user_id, is_completed, create_at) VALUE(?, ?, ?, ?)";
  const value = [name, user, completed ? 1 : 0, createdAt];

  return dbPool.query(sql, value);
};

export const updateData = (name, completed, id) => {
  let updatedAt = new Date();
  const sql = "UPDATE tasks SET  = ?, is_completed = ?, updated_at = ? WHERE task_id = ?";
  const value = [name, completed ? 1 : 0, updatedAt, id];

  return dbPool.query(sql, value);
};

export const deleteData = (id) => {
  const sql = "DELETE FROM tasks WHERE task_id = ?";
  const value = [id];

  return dbPool.query(sql, value);
};
