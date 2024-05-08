const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
  content: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }, // Reference to the User who created the reply
  thread: { type: mongoose.Schema.Types.ObjectId, ref: 'Threads' }, // Reference to the thread the reply belongs to
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Replies', ReplySchema);