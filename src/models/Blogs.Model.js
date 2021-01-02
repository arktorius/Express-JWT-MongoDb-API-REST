import {Schema, model} from 'mongoose'


const blogModel=new Schema({

    Title:{
        type: String,
        trim: true
    },
    Text:{

        type: String,
        trim: true
    },
    Picture:{
        type: String,
        trim: true
    },
    User:{
        type: String,
        trim: true
    }


},{
    versionKey: false,
    timestamps: true

});

export default model('Blog',blogModel);