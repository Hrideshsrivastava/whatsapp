
import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import ChatWindow from './components/Chat/ChatWindow';
import { chatData, messagesData } from './data/dummyData';

/**
 * Main App Component - Manages overall layout and state
 */
const App = () => {
  const [activeChatId, setActiveChatId] = useState(null);
  const [allMessages, setAllMessages] = useState(messagesData);

  const activeChat = chatData.find(chat => chat.id === activeChatId);
  const currentMessages = activeChatId ? allMessages[activeChatId] || [] : [];

  const handleChatSelect = (chat) => {
    setActiveChatId(chat.id);
  };

  const handleSendMessage = (text) => {
    if (!activeChatId) return;

    const newMessage = {
      id: Date.now(), // Simple ID generation
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSent: true
    };

    setAllMessages(prev => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMessage]
    }));
  };

  return (
    <div className="h-screen bg-gray-200 flex">
      <Sidebar
        chats={chatData}
        activeChatId={activeChatId}
        onChatSelect={handleChatSelect}
      />
      <ChatWindow
        activeChat={activeChat}
        messages={currentMessages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default App;
