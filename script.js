document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.message-form');
  const messageInput = document.querySelector('.message-input');
  const messageContainer = document.querySelector('.message-container');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const message = messageInput.value;

    if (message) {
      saveMessage(message);
      appendMessage(message);
      messageInput.value = ''; // Clear input field after submission
    }
  });

  function saveMessage(message) {
    let messages = localStorage.getItem('messages');
    messages = messages ? JSON.parse(messages) : [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
  }

  function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
  }

  const savedMessages = localStorage.getItem('messages');
  if (savedMessages) {
    JSON.parse(savedMessages).forEach(message => {
      appendMessage(message);
    });
  }
});
