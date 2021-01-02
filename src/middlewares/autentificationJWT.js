import jwt from 'jsonwebtoken'
import userModel from '../models/User.Model'
import roleModel from '../models/Role.Model'

export const verifyToken = async (req, res, next) => {

    try {
        const token = req.headers["x-access-token"];

        if (!token) res.json('no acces');

        const decode = jwt.verify(token, 'secret');

        const findUser = await userModel.findById(decode.id);

        if (!findUser) res.json('unser not found');


        const roleUser = await roleModel.findById(findUser.Role[0]);
        console.log(roleUser.RoleUser);

        next();

    } catch (error) {
        res.status(500).json('not autorized');
    }
}