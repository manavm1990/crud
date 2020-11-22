//middleware
import Admin from '../models/admins.model.js'

const createAdmin = function (req, res) {
  let admin = new Admin(req.body)
  admin.addAdmin()
    .then(() => {

      res.status(201);
      res.json();
    }).catch((err) => {
      res.status(500);
      res.json(err);
    })
}

export default createAdmin;

