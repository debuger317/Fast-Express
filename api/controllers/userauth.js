const users = require("../models/customer/AllCustomer");

// Register

const userRegister = async (req, res) => {
    try {
        const newUser = new AllCustomer({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
};

// Login

// router.post("/login", async(req, res)=>{
//     try{
//         const user = await 
//     }
// })

module.exports = {
    userRegister
}