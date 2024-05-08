const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }, // Reference to the User who created the thread
  forum: { type: mongoose.Schema.Types.ObjectId, ref: 'Forums' }, // Reference to the forum the thread belongs to
  createdAt: { type: Date, default: Date.now },
  // Add an array to store replies/comments within the thread (see next schema)
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Replies' }],
});

module.exports = mongoose.model('Threads', ThreadSchema);