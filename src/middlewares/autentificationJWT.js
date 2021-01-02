import jwt from 'jsonwebtoken'
import userModel from '../models/User.Model'

export const verifyToken = async (req, res, next) => {

    const token = req.headers["x-access-token"];

    if(!token) res.json('no acces');

    const decode = jwt.verify(token,'secret');

    const findUser = await userModel.findById(decode.id);
    
    if(!findUser) res.json('unser not found');


    console.log(token,findUser);
        next();
}