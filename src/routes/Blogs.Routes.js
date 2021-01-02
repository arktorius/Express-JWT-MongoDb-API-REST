import {Router} from 'express'
import *as BlogsController from '../controllers/Blogs.Controller'

const blogRouter=Router();

blogRouter.get('/',BlogsController.allBlogs);
blogRouter.get('/:idUser',BlogsController.oneBlog);
blogRouter.post('/',BlogsController.createBlog);
blogRouter.put('/:idUser',BlogsController.updateBlog);
blogRouter.delete('/:idUser',BlogsController.delBlog);

export default blogRouter;

