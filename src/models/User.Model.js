import { format } from "morgan"

import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'


const Users = new Schema({

    UserName: {
        type: String,
        trim: true
    },
    UserFullName: {
        type: String,
        trim: true
    },
    UserPassword: {
        type: String,
        trim: true
    },
    UserIsAviable: {
        type: Boolean,
        trim: true
    },
    Role:[
        {
            ref:"Role",
            type: Schema.Types.ObjectId
        }
    ],
    Blog:[
        {
            ref:"Blog",
            type: Schema.Types.ObjectId
        }
    ]




}, {
    versionKey: false,
    timestamps: true
});

///Users.statics.test = async () => console.log('ok');

Users.statics.ecryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
};

Users.statics.comparePassword = async (password, passwordRecived) => {
    return await bcrypt.compare(password, passwordRecived);

};

export default model('Users', Users);