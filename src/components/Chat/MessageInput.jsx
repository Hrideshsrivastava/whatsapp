
import React, { useState } from 'react';
import { Smile, Paperclip, Mic, Send } from 'lucide-react';

/**
 * MessageInput Component - Input field and send button at bottom of chat
 * @param {Function} onSendMessage - Function to handle sending messages
 */
const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-gray-100 p-4 flex items-center space-x-3">
      <button className="text-gray-500 hover:text-gray-700">
        <Smile size={24} />
      </button>
      <button className="text-gray-500 hover:text-gray-700">
        <Paperclip size={24} />
      </button>
      
      <div className="flex-1 relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message"
          className="w-full px-4 py-2 pr-12 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
        />
        {message.trim() ? (
          <button
            onClick={handleSend}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-600"
          >
            <Send size={20} />
          </button>
        ) : (
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
            <Mic size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageInput;
