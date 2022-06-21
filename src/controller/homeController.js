import pool from "../configs/connectDB"

const getHomePage =  async (req, res) => {
  const [rows, fields] = await pool.execute('SELECT * FROM `users` ');
  console.log(rows);
  return res.render('index.ejs', {dataUser: rows, test: 'abc string test'})

}
const getDetailPage = async (req, res) => {
  let id = req.params.userId;
  let [user] = await pool.execute(`SELECT * from users where id = ${id}`)
  // console.log('Check req params', req.params);
  // console.log(user[0]);
  return res.send(JSON.stringify(user))
}


const createUser = async (req, res) => {
  console.log('check req: ', req.body);
  let { firstName, lastName, email, address} = req.body
  await pool.execute(`INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ?, ?)`, [firstName, lastName, email, address])
  return res.redirect('/')
}

const deleteUser = async (req, res) => {
  let userId = req.body.userId
  console.log('userId ', userId);
  await pool.execute(`DELETE FROM users where id =  ${userId}`)
  return res.redirect('/')
}

const getEditPage = async (req, res) => {
  let id = req.params.id
  let [user] = await pool.execute(`SELECT * FROM users WHERE id = ${id}`)
  console.log('Check user', user);
  return res.render('update.ejs', {dataUser: user[0]})
}

const postUpdateUser = async (req, res) => {
  let {id, firstName, lastName, email, address} = req.body
  await pool.execute('UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?', 
  [firstName, lastName, email, address, id])
  return res.redirect('/')
}

module.exports = {
    getHomePage,
    getDetailPage,
    createUser,
    deleteUser,
    getEditPage,
    postUpdateUser
}