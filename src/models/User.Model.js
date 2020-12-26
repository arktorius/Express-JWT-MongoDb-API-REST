import { format } from "morgan"

import {Schema,model } from 'mongoose'


const Users=new Schema({

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
    }



}, {
    versionKey: false,
    timestamps: true
});

export default model('Users',Users);