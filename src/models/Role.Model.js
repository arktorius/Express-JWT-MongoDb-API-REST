import {Schema,model} from 'mongoose'


const Role=new Schema({

    RoleUser: {
        type: String,
        trim: true
    }



}, {
    versionKey: false,
    timestamps: true
});

export default model('Role',Role);