import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
    // Styled components for UI elements
const ChatContainer = styled.div`
display: flex;
flex-direction: column;
width: 500px;
margin: 0 auto;
padding: 20px;
border-radius: 5px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ChatHistory = styled.div`
flex: 1;
overflow-y: scroll;
margin-bottom: 10px;
`;

const ChatMessage = styled.div`
padding: 10px;
border-radius: 5px;
margin-bottom: 5px;
background-color: ${({ sender }) => (sender === 'user' ? '#f0f0f0' : '#e0e0ff')};
text-align: ${({ sender }) => (sender === 'user' ? 'right' : 'left')};
`;

const ChatInput = styled.div`
display: flex;
`;

const InputField = styled.input`
flex: 1;
padding: 10px;
border: 1px solid #ccc;
border-radius: 3px;
`;

const SendButton = styled.button`
padding: 10px 20px;
border: none;
border-radius: 3px;
cursor: pointer;
background-color: #333;
color: #fff;
`;

const EmojiSpan = styled.span`
font-size: 1.2em;
margin-right: 5px;
`;
  // Replace with your actual Gemini API key
  const API_KEY = 'YOUR_GEMINI_API_KEY';

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const genModel = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const chat = await genModel.startChat({
          generationConfig: {
            maxOutputTokens: 1000,
          },
        });
        setChatHistory([{ message: 'Hi! How can I help you today?', sender: 'bot' }]);
      } catch (error) {
        setErrorMessage('Error starting chat session');
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeChat();
  }, []); // Empty dependency array to run effect only once

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    if (!userInput.trim()) {
      setIsLoading(false);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const genModel = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const newMessage = { message: userInput, sender: 'user' };
      setChatHistory([...chatHistory, newMessage]);
      setUserInput('');

      const lastMessage = chatHistory[chatHistory.length - 1];
      const response = await genModel.generateContent(lastMessage.message);
      const botResponse = await response.response;

      setChatHistory([...chatHistory, { message: botResponse.text(), sender: 'bot' }]);
    } catch (error) {
      setErrorMessage('Error sending message');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <h1>Gemini Chatbot</h1>
      <div className="chat-history">
        {chatHistory.length === 0 && !errorMessage ? (
          <p>Start a conversation by typing your message below.</p>
        ) : (
          chatHistory.map((message) => (
            <Message key={message.message} message={message.message} sender={message.sender} />
          ))
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          disabled={isLoading}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

const Message = React.memo(({ message, sender }) => (
  <div key={message} className={`chat-message ${sender}`}>
    {message}
  </div>
));

export default Chatbot;
