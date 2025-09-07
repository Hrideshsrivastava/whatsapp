
import React from 'react';
import { MoreVertical, Phone, Video, Search } from 'lucide-react';

/**
 * ChatHeader Component - Header of the chat window with contact info and actions
 * @param {Object} activeChat - Currently active chat object
 */
const ChatHeader = ({ activeChat }) => {
  if (!activeChat) return null;

  return (
    <div className="bg-gray-100 border-b border-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            src={activeChat.avatar}
            alt={activeChat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          {activeChat.isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{activeChat.name}</h3>
          <p className="text-sm text-gray-500">
            {activeChat.isOnline ? 'Online' : 'Last seen recently'}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 text-gray-600">
        <button className="hover:text-gray-800">
          <Video size={20} />
        </button>
        <button className="hover:text-gray-800">
          <Phone size={20} />
        </button>
        <button className="hover:text-gray-800">
          <Search size={20} />
        </button>
        <button className="hover:text-gray-800">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
