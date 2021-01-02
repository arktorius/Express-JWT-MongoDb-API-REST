import userModel from '../models/User.Model'



export const allUsers = async (req, res) => {
    try{
        const users= await userModel.find();
        res.json(users);
    }catch(error){
        res.json(error)
    }
};


export const oneUser = async (req, res) => {
    res.json('get one user')
};

export const createUser = async (req, res) => {
    
        try{

            const newUser= new userModel(
                {
                    UserName:req.body.UserName
                }
            );
            await newUser.save();

            res.status(200).json("ok");


        }catch(err){
            res.status(400);
            console.log(err)
        }
}

export const updateUser = async (req, res) => {
    res.json('user is updated')
};

export const delUser = async (req, res) => {
    res.json('user has been deleted')
};