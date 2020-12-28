import blogModel from '../models/Blogs.Model'



export const allBlogs = async(req, res) => {
    res.json('get all Blog')
};


export const oneBlog = async(req, res) => {
    res.json('get one Blog')
};

export const createBlog = async(req, res) => {
    res.json('new Blog created')
};

export const updateBlog = async(req, res) => {
    res.json('Blog is updated')
};

export const delBlog = async(req, res) => {
    res.json('Blog has been deleted')
};