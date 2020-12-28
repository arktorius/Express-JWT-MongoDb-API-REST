import mongoose from 'mongoose'
import configDB from './config'


(async () => {
    const db = await mongoose.connect(configDB.dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:true,
        useCreateIndex:true
    }


    );
    console.log('Database is connected to : ', db.connection.name);


})()
