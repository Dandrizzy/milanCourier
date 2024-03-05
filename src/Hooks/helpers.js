export function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

// Function to group messages by chat ID and return an array of chat objects
export function groupMessagesByChatId(messages) {
  const groupedMessages = [];

  messages.forEach((message) => {
    const chatId = message.chatId;
    const existingChat = groupedMessages.find((chat) => chat.chatId === chatId);

    if (existingChat) {
      existingChat.messages.push(message);
    } else {
      groupedMessages.push({ chatId, messages: [message] });
    }
  });

  return groupedMessages;
}
