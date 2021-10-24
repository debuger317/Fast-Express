const Blog = require('../models/Blog');

const addnewblog = async (req, res) => {
    try {
        const newBlog = new Blog({
            title: req.body.title,
            photo: req.body.photo,
            description: req.body.description,
            tags: req.body.tags,
        })
        const blog = await newBlog.save()
        res.status(200).json(blog)
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//get all posts from blog 

const GetAllBlogPosts = async (req, res) => {
    try {
        const findBlogPosts = await Blog.find();
        res.status(200).json(findBlogPosts)
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//delete a posts from blog 

const DeleteABlogPost = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (req.body.email) {
            try {
                await blog.delete();
                res.status(200).json("blog has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You have no permissions to delete this blog!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    addnewblog,
    GetAllBlogPosts,
    DeleteABlogPost
}