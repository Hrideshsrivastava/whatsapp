export const chatData = [
  {
    id: 1,
    name: "Mom",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c9fcfce2?w=40&h=40&fit=crop&crop=face",
    lastMessage: "Don't forget to call me tonight!",
    timestamp: "2:30 PM",
    unreadCount: 2,
    isOnline: true
  },
  {
    id: 2,
    name: "Work Group",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=40&h=40&fit=crop&crop=face",
    lastMessage: "The meeting has been moved to 3 PM",
    timestamp: "1:15 PM",
    unreadCount: 5,
    isOnline: false
  },
  {
    id: 3,
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    lastMessage: "Sure, let's meet tomorrow",
    timestamp: "12:45 PM",
    unreadCount: 0,
    isOnline: true
  },
  {
    id: 4,
    name: "Sarah Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    lastMessage: "Thanks for the help!",
    timestamp: "11:30 AM",
    unreadCount: 0,
    isOnline: false
  },
  {
    id: 5,
    name: "Tech Team",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face",
    lastMessage: "New update is ready for testing",
    timestamp: "10:20 AM",
    unreadCount: 3,
    isOnline: false
  }
];

// Different message sets for each chat
export const messagesData = {
  1: [ // Mom
    {
      id: 1,
      text: "Hi sweetheart! How was your day?",
      timestamp: "2:15 PM",
      isSent: false
    },
    {
      id: 2,
      text: "It was great mom! Just finished work",
      timestamp: "2:18 PM",
      isSent: true
    },
    {
      id: 3,
      text: "That's wonderful! Are you eating well?",
      timestamp: "2:20 PM",
      isSent: false
    },
    {
      id: 4,
      text: "Yes mom, don't worry about me 😊",
      timestamp: "2:25 PM",
      isSent: true
    },
    {
      id: 5,
      text: "Don't forget to call me tonight!",
      timestamp: "2:30 PM",
      isSent: false
    }
  ],
  2: [ // Work Group
    {
      id: 1,
      text: "Good morning everyone!",
      timestamp: "9:00 AM",
      isSent: false,
      sender: "Manager"
    },
    {
      id: 2,
      text: "Morning! Ready for the presentation today",
      timestamp: "9:05 AM",
      isSent: true
    },
    {
      id: 3,
      text: "The client meeting is at 2 PM",
      timestamp: "10:30 AM",
      isSent: false,
      sender: "Alice"
    },
    {
      id: 4,
      text: "The meeting has been moved to 3 PM",
      timestamp: "1:15 PM",
      isSent: false,
      sender: "Manager"
    }
  ],
  3: [ // Alex Johnson
    {
      id: 1,
      text: "Hey! How's the new project going?",
      timestamp: "11:30 AM",
      isSent: false
    },
    {
      id: 2,
      text: "Pretty well! Almost finished with the first phase",
      timestamp: "11:35 AM",
      isSent: true
    },
    {
      id: 3,
      text: "That's awesome! Want to grab lunch tomorrow?",
      timestamp: "12:40 PM",
      isSent: false
    },
    {
      id: 4,
      text: "Sure, let's meet tomorrow",
      timestamp: "12:45 PM",
      isSent: true
    }
  ],
  4: [ // Sarah Wilson
    {
      id: 1,
      text: "Can you help me with the Excel formulas?",
      timestamp: "10:30 AM",
      isSent: false
    },
    {
      id: 2,
      text: "Of course! Which formulas do you need help with?",
      timestamp: "10:35 AM",
      isSent: true
    },
    {
      id: 3,
      text: "VLOOKUP and pivot tables mainly",
      timestamp: "10:40 AM",
      isSent: false
    },
    {
      id: 4,
      text: "I'll send you a tutorial video, it's really helpful",
      timestamp: "11:00 AM",
      isSent: true
    },
    {
      id: 5,
      text: "Thanks for the help!",
      timestamp: "11:30 AM",
      isSent: false
    }
  ],
  5: [ // Tech Team
    {
      id: 1,
      text: "The database migration is complete",
      timestamp: "8:00 AM",
      isSent: false,
      sender: "DevOps"
    },
    {
      id: 2,
      text: "Great! All tests are passing on my end",
      timestamp: "8:30 AM",
      isSent: true
    },
    {
      id: 3,
      text: "New feature branch is ready for review",
      timestamp: "9:15 AM",
      isSent: false,
      sender: "Developer 1"
    },
    {
      id: 4,
      text: "I'll review it after the standup",
      timestamp: "9:45 AM",
      isSent: true
    },
    {
      id: 5,
      text: "New update is ready for testing",
      timestamp: "10:20 AM",
      isSent: false,
      sender: "QA Lead"
    }
  ]
};