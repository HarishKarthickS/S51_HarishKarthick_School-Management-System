const express = require('express')
const cors = require('cors');
const { startDatabase, isConnected } = require('./db/database');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const router = require('./routes/Blog.routes')
const app = express()
app.use(express.json());
app.use(cors())

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);
app.use('/api', router);
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the amazing world of Learning' })
})

app.get('/home', (req, res) => {
  res.json({
    message: isConnected() ? 'Database is connected' : 'Disconnected from database'
  })
})

app.get('/ping', (req, res) => {
  res.send({ message: 'pong!, Welcome to the amazing world of Learning' })
})

app.post("/gemini", async (req, res) => {
  const { history, message } = req.body;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const chat = model.startChat({
      history: req.body.history,
    });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    res.send(response); // Send the complete response object
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error generating response" });
  }
});

startDatabase()
  .then(() => {
    app.listen(3000, () => {
      console.log('Starting Server ....');
      console.log('Server started running on port 3000 ‍♂️');
    });
  })
  .catch((error) => {
    console.error("Error starting database:", error);
  });
