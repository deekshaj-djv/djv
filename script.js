const chatMessages = document.getElementById('chatMessages');
const input = document.getElementById('userInput');

// Bot responses
const botResponses = {
    "hi": "Hello! How can I help you today?",
    "hello": "Hi there! What can I do for you?",
    "how are you": "I'm a bot, but I'm doing great!",
    "what is your name": "I'm ChatBot, your assistant.",
    "bye": "Goodbye! Have a nice day!"
};

// Enter key support
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const message = input.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    input.value = "";

    setTimeout(() => {
        const lowerMsg = message.toLowerCase();
        let response = "Sorry, I don't understand that.";

        for (let key in botResponses) {
            if (lowerMsg.includes(key)) {
                response = botResponses[key];
                break;
            }
        }

        addMessage(response, "bot");
    }, 400);
}

function addMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "message " + sender;
    msgDiv.textContent = text;

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initial message
window.onload = () => {
    addMessage("Hi! I'm your chatbot 😊", "bot");
};