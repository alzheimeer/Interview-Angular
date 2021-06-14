const mongoose = require('mongoose');

const dbConnection = async function () {
    try {
        await mongoose.connect('mongodb://localhost:27017/cidenet', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('BD Online', 'mongodb://localhost:27017/cidenet');
        mongoose.set('useFindAndModify', false);
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar DB');
    }
}

module.exports = {
    dbConnection
}