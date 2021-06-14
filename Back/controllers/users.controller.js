const { response } = require('express');
const User = require('../models/User');


// Create User
const createUser = async function (req, res) {
    const { typeID, numID, email } = req.body;
    try {
        // verify the numID and typeID exists
        const existsNumID = await User.findOne({ numID });
        if (existsNumID) {
            if (existsNumID.typeID === typeID) {

                return res.status(400).json({
                    ok: false,
                    msg: 'El Empleado ya esta registrado'
                });
            }
        }
        // verify the numID and typeID exists
        const existsEmail = await User.findOne({ email });
        if (existsEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'email ya existe'
            });
        }
        // Create user with model
        const newUser = new User(req.body);

        // Save user in Database
        await newUser.save();

        // Generate successful response
        return res.status(201).json({
            ok: true,
            uid: newUser._id,
        });
    } catch (error) {
        return res.status(500).json({ ok: false, msg: 'Por favor hable con el administrador' });
    }
}


// Read all users
const getUsers = async function (req, res) {
    try {
        const usuario = await User.find();
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador' });
    }
};

//  Read user by id
const getUserById = async function (req, res) {
    try {
        const usuario = await User.findById(req.params.userId);
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del usuario No Existe' });
    }
};
//  Read user by country
const getUserByCountry = async function (req, res) {
    console.log('country:', req.params.country)
    try {
        const usuarios = await User.find({ country: req.params.country });
        return res.status(201).json(usuarios);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del usuario No Existe' });
    }
};

// Update user by id
const updateUserById = async function (req, res) {
    try {
        console.log('update', req.body)
        const usuario = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe' });
    }
};


// Delete user by id
const deleteUserById = async function (req, res) {
    try {
        await User.findByIdAndDelete(req.params.userId);
        return res.status(201).json({ msg: 'Usuario Borrado Con Exito' });
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe' });
    }
};



module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUserById,
    updateUserById,
    getUserByCountry,
}
