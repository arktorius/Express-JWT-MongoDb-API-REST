import userModel from '../models/User.Model'



export const allUsers = async(req, res) => {
    res.json('get all users')
};


export const oneUser = async(req, res) => {
    res.json('get one user')
};

export const createUser = async(req, res) => {
    res.json('new user created')
};

export const updateUser = async(req, res) => {
    res.json('user is updated')
};

export const delUser = async(req, res) => {
    res.json('user has been deleted')
};