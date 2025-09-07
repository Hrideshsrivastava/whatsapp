
import React from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

/**
 * ChatWindow Component - Right panel showing active conversation
 * @param {Object} activeChat - Currently selected chat
 * @param {Array} messages - Messages in the active chat
 * @param {Function} onSendMessage - Function to handle sending messages
 */
const ChatWindow = ({ activeChat, messages, onSendMessage }) => {
  if (!activeChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-500">
          <h2 className="text-2xl font-light mb-2">WhatsApp Web</h2>
          <p>Select a chat to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader activeChat={activeChat} />
      <MessageList messages={messages} />
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatWindow;