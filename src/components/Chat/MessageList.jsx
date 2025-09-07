import React from 'react';
import Message from './Message';

/**
 * MessageList Component - Renders all messages in the chat
 * @param {Array} messages - Array of message objects
 */
const MessageList = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;