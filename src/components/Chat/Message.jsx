
import React from 'react';

/**
 * Message Component - Renders individual chat bubble
 * @param {Object} message - Message object with text, timestamp, isSent flag, and optional sender
 */
const Message = ({ message }) => {
  return (
    <div className={`flex mb-4 ${message.isSent ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          message.isSent
            ? 'bg-green-500 text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
        }`}
      >
        {/* Show sender name for group chats */}
        {message.sender && !message.isSent && (
          <p className="text-xs text-blue-600 font-semibold mb-1">{message.sender}</p>
        )}
        <p className="text-sm">{message.text}</p>
        <p className={`text-xs mt-1 ${message.isSent ? 'text-green-100' : 'text-gray-500'}`}>
          {message.timestamp}
        </p>
      </div>
    </div>
  );
};

export default Message;