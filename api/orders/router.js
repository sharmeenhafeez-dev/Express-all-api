const app = require('express')

const router = app.Router()

const {sandMail} = require ('./controller')


router.post('/sand-mail', sandMail)
// router.get('/all-categories',allCatrgories)
// router.get('/categorybyname', Categorybyname)// quary method
// router.get('/categorybyid/:_id', Categorybyid)// perams method
// router.delete('/delete-category', deleteCategory)
// router.put('/update-category', updateCategory)

module.exports = router