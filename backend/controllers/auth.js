const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res)=> {
    //check existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.name], (err, data)=> {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json('User already exists!');
        
        //hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]

        db.query(q, [values], (err, data)=> {
            if (err) return res.json(err);
            return res.status(200).json('User has been created.');
        })
    })
}

const login = (req, res)=> {

    //CHECK USER

    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data)=> {

        if (err) return res.status(500).json(err);

        //user don't exist
        if (data.length === 0) return res.status(404).json('User not found');

        console.log(data);
        
        //check password
        const isPasswordSame = bcrypt.compareSync(req.body.password, data[0].password);

        console.log(isPasswordSame);
        if (!isPasswordSame) return res.status(400).json('Wrong username or password!');

        const token = jwt.sign({id: data[0].id}, 'jwtkey');
        const {password, ...other} = data[0];
        console.log(token);
        console.log(other);

        res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json(other);
    });
}

const logout = (req, res)=> {

}

module.exports = {
    register,
    login,
    logout
};