// Handle Login
function handleLogin(event) {
    event.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Add Vocabulary Word
function addWord() {
    const word = document.getElementById('new-word').value;
    const meaning = document.getElementById('new-meaning').value;
    if (word && meaning) {
        const listItem = document.createElement('li');
        listItem.textContent = `${word}: ${meaning}`;
        document.getElementById('word-list').appendChild(listItem);
    }
}
