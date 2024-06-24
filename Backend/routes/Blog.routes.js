const express = require('express')
const router = express.Router();
const Blog = require('../models/blog.modal');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
  if(token==null) return res.sendStatus(401)
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    if(err) return res.sendStatus(403)
    next()
  })
}

// Get all blog posts
router.get('/blogs',authenticateToken, async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching blogs' });
  }
});

// Get a specific blog post by ID
router.get('/blogs/:id',authenticateToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching blog' });
  }
});

// Create a new blog post
router.post('/blogs',authenticateToken, async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating blog' });
  }
});

// Update a blog post (modify this based on your requirements)
router.put('/blogs/:id',authenticateToken, async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating blog' });
  }
});

// Delete a blog post
router.delete('/blogs/:id',authenticateToken, async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting blog' });
  }
});

// Mount the router on your Express app
module.exports = router;