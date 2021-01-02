import blogModel from '../models/Blogs.Model'



export const allBlogs = async (req, res) => {
    try {
        const allBlog = await blogModel.find();
        res.status(200).json(allBlog);
    } catch (error) {
        res.status(400).json('bar request');
    }

};


export const oneBlog = async (req, res) => {
    try {
        console.log(req.params);
        const oneBlog = await blogModel.findById(req.params.idUser);
        res.status(200).json(oneBlog)
    } catch (error) {
        res.status(400).json('bad request');
    }
};

export const createBlog = async (req, res) => {
    try {
        const createBlog = blogModel.create(req.body);
        res.status(200).json('blog is created');
    } catch (error) {
        res.status(400).json('bad request');
    }
};

export const updateBlog = async (req, res) => {
    try {
        const blogUpdate = await blogModel.findByIdAndUpdate(req.params.idUser,req.body);
        res.status(200).json('user is updated')
    } catch (error) {
        res.status(400).json('bad request');
    }
};

export const delBlog = async (req, res) => {
    try {
        const delBlog = await blogModel.findByIdAndDelete(req.params.idUser);
        res.status(200).json('is deleted');
    } catch (error) {
        res.status(400).json('bad request');
    }
};