import RoleModel from '../models/Role.Model'



export const createRoles = async ()=>{

    const counter = await RoleModel.estimatedDocumentCount();
    
    if(counter<1){
    
        await new RoleModel({RoleUser:'admin'}).save();
        await new RoleModel({RoleUser:'moderator'}).save();
        await new RoleModel({RoleUser:'user'}).save();

        
    }
   //const roleDb= await RoleModel.find();
    //console.log(roleDb);
}
