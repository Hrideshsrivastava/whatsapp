
import React from 'react';

/**
 * ChatItem Component - Individual chat preview in the sidebar
 * @param {Object} chat - Chat object with name, avatar, last message, etc.
 * @param {boolean} isActive - Whether this chat is currently selected
 * @param {Function} onClick - Function to handle chat selection
 */
const ChatItem = ({ chat, isActive, onClick }) => {
  return (
    <div
      className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 ${
        isActive ? 'bg-gray-200' : ''
      }`}
      onClick={() => onClick(chat)}
    >
      <div className="relative flex-shrink-0">
        <img
          src={chat.avatar}
          alt={chat.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        {chat.isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      
      <div className="flex-1 ml-3 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-800 truncate">{chat.name}</h4>
          <span className="text-xs text-gray-500 flex-shrink-0">{chat.timestamp}</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
          {chat.unreadCount > 0 && (
            <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center flex-shrink-0 ml-2">
              {chat.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;