// all users, companys, admins with only their email and password
// must be including their role like admin merchant, user

const router = require("express").Router();
const auth_control = require("../controllers/auth");

router.post("/register", auth_control.Register);
router.post("/login", auth_control.Login);
router.get('/all', auth_control.all);
router.put('/:id', auth_control.update);
router.delete("/:id", auth_control.deleteuser)

module.exports = router;


// Route::get('/user',[
//     'uses' => 'AppController@user',
//     'as'   => 'useraccess',
//     'roles'=> 'HomeController@useroles', 
//     ]);

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }

// res.download('/report-12345.pdf')

// res.download('/report-12345.pdf', 'report.pdf')

// res.download('/report-12345.pdf', 'report.pdf', function (err) {
//   if (err) {
//     // Handle error, but keep in mind the response may be partially-sent
//     // so check res.headersSent
//   } else {
//     // decrement a download credit, etc.
//   }
// })