import pool from "../configs/connectDB"

const getHomePage =  async (req, res) => {
  // let data = []
  // connection.query(
  //   'SELECT * from `users` ',
  //   function(err, results, fields) {
  //     console.log(results);
  //     data = results.map((row) => {return row})

  //     return res.render('index.ejs', {dataUser: data, test: 'abc string test'})
  //   }
  // );

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


module.exports = {
    getHomePage,
    getDetailPage
}