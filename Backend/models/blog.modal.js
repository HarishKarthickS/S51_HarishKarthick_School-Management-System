const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set on creation
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set on creation and update
  },
  // Additional optional fields you might want:
  // - comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }], // Array of comment references
  // - tags: [String], // Array of tags associated with the post
  // - coverImage: String, // URL or path to the post's cover image
});

// Enable timestamps for automatic updates
BlogPostSchema.timestamps = true;

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;