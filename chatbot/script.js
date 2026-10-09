document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const messageForm = document.getElementById("message-form");
    const messageInput = document.getElementById("message-input");

    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const messageText = messageInput.value.trim();

        if (messageText) {
            addMessage(messageText, "user-message");
            messageInput.value = "";
            setTimeout(() => {
                addMessage(`Echo: ${messageText}`, "bot-message");
            }, 1000);
        }
    });

    function addMessage(text, className) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", className);
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Initial bot message
    setTimeout(() => {
        addMessage("Hello! How can I help you today?", "bot-message");
    }, 1500);
});
