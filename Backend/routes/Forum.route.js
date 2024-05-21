const router = express.Router();
const Forum = require('../models/Forum.model');
// Get all forums
router.get('/forums', async (req, res) => {
  try {
    const forums = await Forum.find();
    res.json(forums);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching forums' });
  }
});

// Get a specific forum by ID
router.get('/forums/:id', async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    if (!forum) {
      return res.status(404).json({ message: 'Forum not found' });
    }
    res.json(forum);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching forum' });
  }
});

// Create a new forum
router.post('/forums', async (req, res) => {
  try {
    const newForum = new Forum(req.body);
    await newForum.save();
    res.status(201).json(newForum);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating forum' });
  }
});

// Update a forum (modify this based on your requirements)
router.put('/forums/:id', async (req, res) => {
  try {
    const updatedForum = await Forum.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedForum) {
      return res.status(404).json({ message: 'Forum not found' });
    }
    res.json(updatedForum);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating forum' });
  }
});

// Delete a forum
router.delete('/forums/:id', async (req, res) => {
  try {
    const deletedForum = await Forum.findByIdAndDelete(req.params.id);
    if (!deletedForum) {
      return res.status(404).json({ message: 'Forum not found' });
    }
    res.json({ message: 'Forum deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting forum' });
  }
});

// Get all threads within a forum
router.get('/forums/:forumId/threads', async (req, res) => {
  try {
    const threads = await Thread.find({ forum: req.params.forumId });
    res.json(threads);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching threads' });
  }
});

// Get a specific thread within a forum
router.get('/forums/:forumId/threads/:threadId', async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.threadId);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    res.json(thread);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching thread' });
  }
});

// Create a new thread within a forum
router.post('/forums/:forumId/threads', async (req, res) => {
  try {
    const newThread = new Thread({ forum: req.params.forumId, ...req.body });
    await newThread.save();
    res.status(201).json(newThread);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating thread' });
  }
});

// Update a thread within a forum (modify this based on your requirements)
router.put('/forums/:forumId/threads/:threadId', async (req, res) => {
  try {
    const updatedThread = await Thread.findByIdAndUpdate(req.params.threadId, req.body, { new: true });
    if (!updatedThread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    res.json(updatedThread);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating thread' });
  }
});

// Delete a thread within a forum
router.delete('/forums/:forumId/threads/:threadId', async (req, res) => {
  try {
    const deletedThread = await Thread.findByIdAndDelete(req.params.id);
    if (!deletedThread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    res.json({ message: 'Thread deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting thread' });
  }
});

// Mount the router on your Express app
app.use('/api/forums', router);
