const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
const app = express()
const cors = require('cors');
const { startDatabase, isConnected } = require('./db/database');
const { GoogleGenerativeAI } = require("@google/generative-ai");
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);
app.get('/', (req, res) => {
  res.send({message:'Welcome to the amazing world of Learning'})
})
app.get('/home', (req, res) => {
  res.json({
    message: isConnected() ? 'Database is connected' : 'Disconnected from database'
  })
  })
app.get('/ping',(req,res)=>{
    res.send({message:'pong!, Welcome to the amazing world of Learning'})
})
app.post("/gemini", async (req, res) => {
  const { history, message } = req.body;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: req.body.history,
  });
  const msg = req.body.message;

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  res.send(text);
});
startDatabase()
.then(()=>{
  app.listen(3000,async()=>{
    console.log('Starting Server ....🚀')
    console.log('Server started running on port 3000 🏃‍♂️')
})
})
