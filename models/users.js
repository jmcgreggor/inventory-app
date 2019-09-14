const db = require('../connectors/db.js');

class User {
  constructor(id, user_id, first_name, middle_initial, last_name, email, type) {
    this.id = id;
    this.first_name = first_name;
    this.middle_initial = middle_initial;
    this.last_name = last_name;
    this.email = email;
    this.type = type;
    this.user_id = user_id;
  };

  static newUser(user_id, first_name, middle_initial, last_name, email, type) {
    return db.one(`
      INSERT INTO users (
        "user_id",
        "first_name",
        "middle_initial",
        "last_name",
        "email",
        "type"
      )
      VALUES (
        $1, $2, $3, $4, $5, $6
      ) RETURNING id
      `, [user_id,first_name,middle_initial,last_name,email,type]
      );

  }

  static async allUsers() {
    const findAllQuery = `SELECT * FROM users`;

    return db.query(findAllQuery);
  }

  static async selectUser(id) {
    console.log(id);

    return db.query(`SELECT * FROM users WHERE id = $1`, [id]);
  }

  static async deleteUser(id) {
    console.log(`Will delete ${id} from database`);

    return db.query(`DELETE FROM users WHERE id = $1`, [id]);
  }

  static async updateUserRecord(id, record, value) {
    console.log(`Will update user ${record} with id of ${id}
      in database to ${value}`);

    //return db.query(`UPDATE users SET $2 = $3 WHERE id = $1`, [id, record, value]);
    //Above does not work but below is not safe
    return db.query(`UPDATE users SET ${record} = $3 WHERE id = $1`, [id, record, value]);
  }


}

module.exports = User;

//TODO: Create default subscription and license order based on type
