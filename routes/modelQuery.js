const  express  = require("express");
const router = express.Router();

const { specificField } = require("../controllers/modelQueryController");


router.route('/specificField').get(specificField);


module.exports = router