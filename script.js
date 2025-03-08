// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Vocabulary Builder
function addWord() {
    const word = document.getElementById("new-word").value;
    const meaning = document.getElementById("new-meaning").value;
    if (word && meaning) {
        const list = document.getElementById("word-list");
        const item = document.createElement("li");
        item.textContent = `${word}: ${meaning}`;
        list.appendChild(item);
    }
}

// Speech Recognition
function startSpeechRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (event) => {
        document.getElementById("speech-output").textContent = event.results[0][0].transcript;
    };
    recognition.start();
}

// AI Chatbot
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const output = document.getElementById("chat-output");
    output.innerHTML += `<p>You: ${userInput}</p>`;
    output.innerHTML += `<p>Bot: That's interesting!</p>`;
}

// Coding Check
function checkCodingAnswer() {
    const answer = document.getElementById("coding-answer").value.trim();
    const feedback = document.getElementById("coding-feedback");
    feedback.textContent = (answer === "Hello, CodeXP!") ? "✅ Correct!" : "❌ Try Again!";
}
