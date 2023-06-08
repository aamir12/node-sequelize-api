const  express  = require("express");
const router = express.Router();
const { getUsers,getUser,createUser,bulkCreateUser,deleteUser,updateUser,addContactTest } = require("../controllers/userController");



router.route('/').get(getUsers);
router.route('/add').post(createUser);
router.route('/bulkAdd').post(bulkCreateUser);
//playground
router.route('/playground').get(addContactTest); 

//always keep dynamic route at the bottom //:id
router.route('/:id').get(getUser);
router.route('/:id').delete(deleteUser);
router.route('/:id').put(updateUser);



module.exports = router