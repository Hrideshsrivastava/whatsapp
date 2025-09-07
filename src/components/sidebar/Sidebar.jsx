
import React, { useState } from 'react';
import { Search, MoreVertical } from 'lucide-react';
import ChatList from './ChatList';

/**
 * Sidebar Component - Left panel with user profile, search, and chat list
 * @param {Array} chats - Array of chat objects
 * @param {number} activeChatId - ID of currently active chat
 * @param {Function} onChatSelect - Function to handle chat selection
 */
const Sidebar = ({ chats, activeChatId, onChatSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* User Profile Header */}
      <div className="bg-gray-100 p-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-800">John Doe</span>
        </div>
        <button className="text-gray-600 hover:text-gray-800">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="p-3 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search or start new chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:shadow-sm border border-transparent focus:border-gray-300"
          />
        </div>
      </div>

      {/* Chat List */}
      <ChatList
        chats={filteredChats}
        activeChatId={activeChatId}
        onChatSelect={onChatSelect}
      />
    </div>
  );
};

export default Sidebar;