import UserModel from '../models/User.Model'
import jwt from 'jsonwebtoken'
import RoleModel from '../models/Role.Model'

export const singUp = async (req, res) => {

    try {
        const { UserName, UserPassword, Role } = req.body;

        const newUser = new UserModel({
            UserName,
            UserPassword: await UserModel.ecryptPassword(UserPassword)
        });

        const foundRoleTest= await RoleModel.find({RoleUser:Role});
        console.log('asdajsdlajsdjkaksdñalksjdña',foundRoleTest.length);
        
      
        if(foundRoleTest.length>0){
            const foundRole= await RoleModel.find({RoleUser:Role});

            console.log('quizas siga pasando por aqui')
            newUser.Role=foundRole.map(Role=>Role.id);
            
        }else{
            const foundRoleNull= await RoleModel.find({RoleUser:'user'});
           
            newUser.Role=foundRoleNull.map(Role=>Role.id);
            console.log('paso por aqui')
        }

        await newUser.save();
        res.status(200).json('sinup');
    

    } catch (error) {
        res.json('error')
    }
};


export const singIn = async (req, res) => {

    try {
        const { UserName, UserPassword } = req.body;

        const userFound = await UserModel.findOne({ UserName: UserName }).populate("Role");

        

        
        if (!userFound) {
            res.status(404).json('User not found');
        }
        const compare = await UserModel.comparePassword(UserPassword, userFound.UserPassword);
        console.log(userFound);
        if(compare){
            
            const token= await jwt.sign({id:userFound.id},'secret',{expiresIn:200});
            res.json({'token ':token});
         }
         else{

         
            res.json('bad request');
        }
    } catch (error) {
        console.error(error);
       // res.json('error')
    }
};