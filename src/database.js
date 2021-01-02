import mongoose from 'mongoose'
import configDB from './config'


(async () => {
    const db = await mongoose.connect(configDB.dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }


    );
    console.log('Database is connected to : ', db.connection.name);


})()
