const router = require ("express-promise-router")()
const controllers = require ("../controllers/")

router.route("/")
.get(controllers.helloWorld)

module.exports = router;