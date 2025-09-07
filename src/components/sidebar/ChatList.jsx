
import React from 'react';
import ChatItem from './ChatItem';

/**
 * ChatList Component - Container for all chat items in sidebar
 * @param {Array} chats - Array of chat objects
 * @param {number} activeChatId - ID of currently active chat
 * @param {Function} onChatSelect - Function to handle chat selection
 */
const ChatList = ({ chats, activeChatId, onChatSelect }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          chat={chat}
          isActive={chat.id === activeChatId}
          onClick={onChatSelect}
        />
      ))}
    </div>
  );
};

export default ChatList;